export interface ProjectLink {
  label: string
  href: string
}

export default interface Project {
  title: string
  description: string
  tags: string[]
  categories: string[]
  year?: string
  image?: string
  github: string
  links?: ProjectLink[]
}
