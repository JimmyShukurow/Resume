<script setup lang="ts">
defineProps<{
  title: string
  eyebrow?: string
}>()
</script>

<template>
  <header>
    <p v-if="eyebrow" class="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
      {{ eyebrow }}
    </p>
    <h2 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      {{ title }}
    </h2>
    <span class="mt-4 block h-1 w-12 rounded-full bg-accent" />
  </header>
</template>
