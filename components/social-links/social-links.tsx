import Link from 'next/link'
import GithubIcon from '../shared/icons/github/GithubIcon'
import LinkedinIcon from '../shared/icons/linkedin/LinkedinIcon'

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href="https://www.linkedin.com/in/tiberiu-boscan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
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
        <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
          <div className="w-8 text-white">
            <GithubIcon />
          </div>
        </div>
      </Link>
    </div>
  )
}
