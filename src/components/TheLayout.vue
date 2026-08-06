<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './TheSidebar.vue'
import TopNav from './TopNav.vue'

const route = useRoute()
const pathname = computed(() => route.path)
</script>

<template>
  <div class="min-h-screen w-full bg-ink">
    <div
      class="mx-auto grid w-full max-w-295 gap-6 px-4 py-6 sm:px-6 sm:py-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8"
    >
      <Sidebar />

      <main class="min-w-0 rounded-3xl border border-line bg-surface p-4 sm:p-8 lg:p-10">
        <div class="sm:flex sm:items-start sm:justify-end">
          <TopNav />
        </div>

        <Transition name="page" mode="out-in">
          <div :key="pathname" class="mt-6 sm:mt-2">
            <slot />
          </div>
        </Transition>
      </main>
    </div>
  </div>
</template>

<style scoped>
.page-enter-active {
  transition:
    opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
