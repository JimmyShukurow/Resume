import type { TimelineEntry } from '../types'

export const education: TimelineEntry[] = [
  {
    title: 'International Turkmen-Turkish University',
    org: 'Bachelor of Science in Computer Engineering',
    period: '2007 — 2012',
  },
  {
    title: 'Turkmen-Turkish College',
    org: 'Physics International Olympiad in 2007',
    period: '2002 — 2007',
  },
]

export const experience: TimelineEntry[] = [
  {
    title: 'Fullstack Developer',
    org: 'Insof Nasiya',
    period: 'Oct, 2024 — Present',
    duration: '7 mos',
    location: 'Tashkent, Uzbekistan',
    bullets: [
      'Enhanced Kotlin-based Android app for improved performance and stability.',
      'Built an Admin Panel with Angular & Flowbite for agent-client management.',
      'Set up Prometheus, Zipkin & Grafana for monitoring and tracing.',
      'Used Docker and CI/CD for streamlined deployment.',
    ],
  },
  {
    title: 'Fullstack Developer',
    org: 'SmartIR',
    period: 'Nov, 2022 — Jul, 2024',
    duration: '1 yr, 9 mos',
    location: 'Istanbul, Turkey',
    bullets: [
      'Led a startup team focused on developing projects utilizing Infrared Cameras.',
      'Implemented a microservices architecture using Docker, Docker Compose, and Spring Boot.',
      'Utilized Jenkins for setting up and managing CI/CD pipelines.',
      'Contributed to a driver healthcare tracking web app using Vue.js and Spring Boot.',
      'Optimized data flow with Kafka and Spring Boot of huge statistics in back end for optimal delivery for smooth UX.',
      'Created simple micro service system with Spring Boot and Kafka.',
    ],
  },
  {
    title: 'Fullstack Developer',
    org: 'Gainex Crypto Market',
    period: 'Oct, 2021 — Sep, 2022',
    duration: '11 mos',
    location: 'Istanbul, Turkey',
    bullets: [
      'Took a role in development of website from scratch using VUE with Quasar and Laravel with Spring Boot.',
      'Adapted and applied well-established clean code techniques, design patterns, and SOLID system to solve commonly occurring problems.',
      'Developed responsive and dynamic UIs using Vue 3 and Quasar.',
      'Integrated WebSocket streams for live crypto price updates in the UI.',
      'Optimized rendering performance for large transaction datasets.',
      'Used Pinia for reactive state management across complex modules.',
    ],
  },
]
