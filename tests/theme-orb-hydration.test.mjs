import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import postcss from 'postcss'
import sharp from 'sharp'

function renderInitialMarkup(theme) {
  const result = spawnSync(
    process.execPath,
    [
      '--input-type=commonjs',
      '-e',
      `
      const fs = require('node:fs')
      const path = require('node:path')
      const Module = require('node:module')
      const theme = process.argv[1]
      if (theme !== 'server') {
        global.window = { matchMedia: () => ({ matches: theme === 'system-dark' }) }
        global.localStorage = { getItem: () => theme.startsWith('system') ? 'system' : theme }
      }
      const React = require('react')
      const { renderToString } = require('react-dom/server')
      const { ThemeProvider } = require('next-themes')
      const { transformSync } = require('next/dist/build/swc')
      const filename = path.resolve('components/three/theme-orb.tsx')
      const output = transformSync(fs.readFileSync(filename, 'utf8'), {
        filename,
        jsc: {
          parser: { syntax: 'typescript', tsx: true },
          transform: { react: { runtime: 'automatic' } },
        },
        module: { type: 'commonjs' },
      })
      const component = new Module(filename, module)
      component.filename = filename
      component.paths = Module._nodeModulePaths(path.dirname(filename))
      component._compile(output.code, filename)
      const markup = renderToString(React.createElement(
        ThemeProvider,
        { attribute: 'class', defaultTheme: 'dark', enableSystem: true },
        React.createElement(component.exports.default),
      ))
      process.stdout.write(markup.slice(markup.indexOf('<div class="theme-orb"')))
    `,
      theme,
    ],
    { cwd: new URL('..', import.meta.url), encoding: 'utf8' },
  )
  assert.ifError(result.error)
  assert.equal(result.status, 0, result.stderr)
  assert.ok(result.stdout.includes('theme-orb-scene'), result.stdout)
  return result.stdout
}

test('moon attributes match between SSR and the initial render for every saved theme', () => {
  const server = renderInitialMarkup('server')
  for (const theme of ['light', 'dark', 'system-light', 'system-dark']) {
    assert.equal(
      renderInitialMarkup(theme),
      server,
      `${theme} must hydrate with identical SVG attributes`,
    )
  }
})

test('sun and moon render blue instead of falling back to black', async () => {
  const markup = renderInitialMarkup('server')
  const svg = markup.match(/<svg[\s\S]*<\/svg>/)[0]
  const attributes = markup.match(/<div class="theme-orb"([^>]*)>/)[1]
  const css = postcss.parse(
    readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8'),
  )
  const rules = css.nodes
    .filter(
      (node) => node.type === 'rule' && node.selector.includes('theme-orb'),
    )
    .map(String)
    .join('\n')
  for (const theme of ['light', 'dark']) {
    const image = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640"><style>${rules}</style><g class="${theme}"><g class="theme-orb"${attributes}>${svg}</g></g></svg>`
    const { data, info } = await sharp(Buffer.from(image))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })
    let bluePixels = 0
    let blackPixels = 0
    for (let i = 0; i < data.length; i += info.channels) {
      const [r, g, b, alpha] = data.subarray(i, i + 4)
      if (alpha < 240) continue
      if (b > g && g > r && b > 150) bluePixels++
      if (r < 40 && g < 40 && b < 40) blackPixels++
    }
    assert.ok(
      bluePixels > 10000 && blackPixels < bluePixels * 0.01,
      `${theme} orb should be blue, got ${bluePixels} blue and ${blackPixels} black pixels`,
    )
  }
})
