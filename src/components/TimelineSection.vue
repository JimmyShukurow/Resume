<script setup lang="ts">
import type { Component } from 'vue'
import type { TimelineEntry } from '../types'

defineProps<{
  id: string
  title: string
  icon: Component
  entries: TimelineEntry[]
}>()
</script>

<template>
  <section :aria-labelledby="id">
    <div class="flex items-center gap-3">
      <span
        class="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-elevated text-accent"
      >
        <component :is="icon" :size="18" :stroke-width="1.75" />
      </span>
      <h3 :id="id" class="font-display text-xl font-semibold text-white">
        {{ title }}
      </h3>
    </div>

    <ol class="mt-6 space-y-8 border-l border-line pl-6 sm:ml-5">
      <li v-for="entry in entries" :key="`${entry.title}-${entry.org}`" class="relative">
        <span
          class="absolute -left-7.75 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-surface"
        />
        <h4 class="font-display text-base font-semibold text-white">
          {{ entry.title }}
        </h4>
        <p class="mt-1 text-sm text-body/90">{{ entry.org }}</p>
        <p class="mt-1 font-mono text-xs text-accent">
          {{ entry.period }}{{ entry.duration ? ` • ${entry.duration}` : '' }}
        </p>
        <p v-if="entry.location" class="mt-0.5 text-xs italic text-muted">
          {{ entry.location }}
        </p>
        <ul v-if="entry.bullets" class="mt-3 space-y-2">
          <li
            v-for="bullet in entry.bullets"
            :key="bullet"
            class="flex gap-2.5 text-sm leading-relaxed text-body/80"
          >
            <span aria-hidden="true" class="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>
