import type { Project } from '../types'

const thumbnail =
  'https://cdn.magicpatterns.com/patterns/generated-images/f1ed605e-0322-4ad7-bf7e-252e7023de68.jpg'

export const projects: Project[] = [
  {
    name: 'SmartIR',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Spring Boot'],
    image: thumbnail,
  },
  {
    name: 'Gainex',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue 3', 'Quasar'],
    image: thumbnail,
  },
  {
    name: 'TravelShop',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Laravel'],
    image: thumbnail,
  },
  {
    name: 'E-commerce Project',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Spring Boot'],
    image: thumbnail,
  },
  {
    name: 'Vue Admin Panel (Not Finished)',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Quasar'],
    image: thumbnail,
  },
  {
    name: 'Blog App',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Spring Boot'],
    image: thumbnail,
  },
  {
    name: 'Microservice Demo',
    tag: 'web',
    category: 'Web development',
    stack: ['Spring Boot', 'Kafka'],
    image: thumbnail,
  },
  {
    name: 'Chat app',
    tag: 'web',
    category: 'Web development',
    stack: ['WebSocket', 'Spring Boot'],
    image: thumbnail,
  },
  {
    name: 'Books App',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Spring Boot'],
    image: thumbnail,
  },
  {
    name: 'Knights Tour',
    tag: 'desktop',
    category: 'Applications',
    stack: ['Java', 'JavaFX'],
    image: thumbnail,
  },
  {
    name: 'Snake game',
    tag: 'desktop',
    category: 'Applications',
    stack: ['Java', 'JavaFX'],
    image: thumbnail,
  },
]

export const projectFilters = ['All', 'Web development', 'Applications'] as const
