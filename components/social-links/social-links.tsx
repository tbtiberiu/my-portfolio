import GithubIcon from '../shared/icons/github/GithubIcon'
import LinkedinIcon from '../shared/icons/linkedin/LinkedinIcon'

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
        <div className="w-8 text-white">
          <LinkedinIcon />
        </div>
      </div>
      <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
        <div className="w-8 text-white">
          <GithubIcon />
        </div>
      </div>
    </div>
  )
}
