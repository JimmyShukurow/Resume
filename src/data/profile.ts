import type { ContactChannel, Service, SocialLink } from '../types'

export const profile = {
  name: 'Jemshit Shukurov',
  role: 'Software Developer',
  avatar:
    'https://cdn.magicpatterns.com/patterns/generated-images/02b57cbb-f329-4fc5-bfba-7ed01aa471f1.jpg',
  available: true,
}

export const channels: ContactChannel[] = [
  {
    label: 'Email',
    value: 'jimishukurow@gmail.com',
    href: 'mailto:jimishukurow@gmail.com',
  },
  { label: 'Phone', value: '+998 90 965 24 52', href: 'tel:+998909652452' },
  { label: 'Location', value: 'Tashkent, Uzbekistan' },
]

export const socials: SocialLink[] = [
  { label: 'YouTube', href: 'https://www.youtube.com/@jimishukurow2286' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jemshit-shukurov/' },
  { label: 'GitHub', href: 'https://github.com/JimmyShukurow' },
]

export const aboutParagraphs: string[] = [
  "I'm a passionate software developer with over five years of experience specializing in Java Spring Boot and Vue.js. I love building scalable and efficient backend systems, working with Kafka, and optimizing distributed applications. On the frontend, I enjoy crafting interactive UIs with Vue.js, Quasar, and recently, Angular with Flowbite for sleek and responsive designs. I have hands-on experience with Docker, Kubernetes, and cloud-native architectures, ensuring smooth deployments and performance tuning.",
  "Beyond coding, I'm an International Science Olympiad contestant and always eager to explore new technologies and challenges.",
]

export const aboutHighlights: string[] = [
  'Java Spring Boot',
  'Vue.js',
  'Kafka',
  'Quasar',
  'Angular with Flowbite',
  'Docker',
  'Kubernetes',
  'International Science Olympiad contestant',
]

export const services: Service[] = [
  {
    title: 'Mobile Apps',
    description: 'Standart development of applications for Android.',
    icon: 'mobile',
  },
  {
    title: 'Web Development',
    description: 'High-quality development of sites at the professional level.',
    icon: 'web',
  },
  {
    title: 'Desktop Development',
    description: 'Standart Desktop apps with JavaFX.',
    icon: 'desktop',
  },
  {
    title: 'Backend',
    description:
      'High-performance backend services designed for scalability and seamless user experience.',
    icon: 'backend',
  },
]

export const skills: string[] = [
  'Java',
  'Spring Boot',
  'Kafka',
  'Docker',
  'Kubernetes',
  'Vue.js',
  'Quasar',
  'Angular',
  'Kotlin',
  'JavaFX',
  'Jenkins',
  'Grafana',
]
