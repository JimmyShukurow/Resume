<script setup lang="ts">
const links = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <nav
    aria-label="Primary"
    class="sticky top-0 z-20 -mx-4 border-b border-line bg-surface/95 px-4 backdrop-blur sm:mx-0 sm:rounded-t-3xl sm:border-b-0 sm:bg-transparent sm:px-0 sm:backdrop-blur-none"
  >
    <ul class="flex items-center gap-1 overflow-x-auto py-3 sm:justify-end sm:py-0">
      <li v-for="link in links" :key="link.to">
        <RouterLink
          :to="link.to"
          :exact="link.to === '/'"
          class="relative block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors text-muted hover:text-body"
          active-class="!bg-elevated !text-accent"
          :exact-active-class="link.to === '/' ? '!bg-elevated !text-accent' : ''"
        >
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
