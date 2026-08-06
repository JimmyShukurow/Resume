export type ContactChannel = {
  label: string
  value: string
  href?: string
}

export type SocialLink = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  icon: 'mobile' | 'web' | 'desktop' | 'backend'
}

export type TimelineEntry = {
  title: string
  org: string
  period: string
  duration?: string
  location?: string
  summary?: string
  bullets?: string[]
}

export type ProjectCategory = 'Web development' | 'Applications'

export type Project = {
  name: string
  tag: string
  category: ProjectCategory
  stack: string[]
  image: string
}

export type Post = {
  title: string
  date: string
  kind: string
  excerpt: string
}
