import type { Project } from '../types'

const thumbnail =
  'https://cdn.magicpatterns.com/patterns/generated-images/f1ed605e-0322-4ad7-bf7e-252e7023de68.jpg'

export const projects: Project[] = [
  {
    name: 'SmartIR',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Spring Boot'],
    image: new URL('../assets/smartir.png', import.meta.url).href,
    link: 'https://smartir.io',
  },
  {
    name: 'Gainex',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue 3', 'Quasar'],
    image: new URL('../assets/gainex.png', import.meta.url).href,
    link: 'https://gainex.com',
  },
  {
    name: 'TravelShop',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Laravel'],
    image: new URL('../assets/travelshop.png', import.meta.url).href,
    link: 'https://travelshopturkey.com',
  },
  {
    name: 'E-commerce Project',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Spring Boot'],
    image: new URL('../assets/e-commerce.png', import.meta.url).href,
    link: 'https://vue-ecommerce-phi.vercel.app/#/',
  },
  {
    name: 'Vue Admin Panel (Not Finished)',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Quasar'],
    image: new URL('../assets/admin-panel.png', import.meta.url).href,
    link: 'https://vue-admin-panel.vercel.app/#/',
  },
  {
    name: 'Blog App',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Spring Boot'],
    image: new URL('../assets/blog-app.png', import.meta.url).href,
    link: 'https://blog.jemsit.net',
  },
  {
    name: 'Microservice Demo',
    tag: 'web',
    category: 'Web development',
    stack: ['Spring Boot', 'Kafka'],
    image: new URL('../assets/PowerCorp.png', import.meta.url).href,
    link: 'https://github.com/Microservice-Projects-Jimmy/PowerCorp-test-case',
  },
  {
    name: 'Chat app',
    tag: 'web',
    category: 'Web development',
    stack: ['WebSocket', 'Spring Boot'],
    image: new URL('../assets/chat-app.png', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Books App',
    tag: 'web',
    category: 'Web development',
    stack: ['Vue.js', 'Spring Boot'],
    image: new URL('../assets/chat-app.png', import.meta.url).href,
    link: 'https://github.com/JimmyShukurow/BooksSpringBoot.git',
  },
  {
    name: 'Knights Tour',
    tag: 'desktop',
    category: 'Applications',
    stack: ['Java', 'JavaFX'],
    image: new URL('../assets/knight-problem.png', import.meta.url).href,
    link: 'https://github.com/JimmyShukurow/Chess-question',
  },
  {
    name: 'Snake game',
    tag: 'desktop',
    category: 'Applications',
    stack: ['Java', 'JavaFX'],
    image: new URL('../assets/snake.png', import.meta.url).href,
    link: 'https://snakegamev1.vercel.app/',
  },
]

export const projectFilters = ['All', 'Web development', 'Applications'] as const
