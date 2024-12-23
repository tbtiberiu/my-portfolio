import Link from 'next/link'
import GithubIcon from '../shared/icons/github/github-icon'
import LinkedinIcon from '../shared/icons/linkedin/linkedin-icon'

export default function SocialLinks() {
  return (
    <div className="sticky-socials sticky float-end top-24 mt-44 mx-5 z-50">
      <div className="flex flex-col gap-5">
        <Link
          href="https://www.linkedin.com/in/tiberiu-boscan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-16 bg-primary hover:bg-secondary rounded-full flex justify-center items-center">
            <div className="w-8 text-white">
              <LinkedinIcon />
            </div>
          </div>
        </Link>
        <Link
          href="https://github.com/tbtiberiu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-16 bg-primary hover:bg-secondary rounded-full flex justify-center items-center">
            <div className="w-8 text-white">
              <GithubIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
