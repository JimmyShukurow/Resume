<script setup lang="ts">
import { Database, Monitor, Smartphone, CodeXml } from 'lucide-vue-next'
import PageHeading from '../components/PageHeading.vue'
import HighlightedText from '../components/HighlightedText.vue'
import { aboutHighlights, aboutParagraphs, services, skills } from '../data/profile'

const serviceIcons = {
  mobile: Smartphone,
  web: CodeXml,
  desktop: Monitor,
  backend: Database,
}
</script>

<template>
  <div class="space-y-12">
    <PageHeading eyebrow="Profile" title="About Me" />

    <div class="max-w-3xl space-y-5 text-[15px] leading-relaxed text-body/90">
      <p v-for="paragraph in aboutParagraphs" :key="paragraph.slice(0, 24)">
        <HighlightedText :text="paragraph" :highlights="aboutHighlights" />
      </p>
    </div>

    <section aria-labelledby="services-heading">
      <h3 id="services-heading" class="font-display text-lg font-semibold text-white">
        What I can do for you
      </h3>
      <ul class="mt-5 grid gap-4 sm:grid-cols-2">
        <li
          v-for="service in services"
          :key="service.title"
          class="group rounded-2xl border border-line bg-elevated p-5 transition-colors hover:border-accent/60"
        >
          <span
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-accent"
          >
            <component
              :is="serviceIcons[service.icon]"
              :size="18"
              :stroke-width="1.75"
              aria-hidden="true"
            />
          </span>
          <h4 class="mt-4 font-display text-base font-semibold text-white">
            {{ service.title }}
          </h4>
          <p class="mt-1.5 text-sm leading-relaxed text-muted">
            {{ service.description }}
          </p>
        </li>
      </ul>
    </section>

    <section aria-labelledby="skills-heading">
      <h3 id="skills-heading" class="font-display text-lg font-semibold text-white">Skills</h3>
      <ul class="mt-5 flex flex-wrap gap-2">
        <li
          v-for="skill in skills"
          :key="skill"
          class="rounded-full border border-line bg-elevated px-3.5 py-1.5 font-mono text-xs text-body/80"
        >
          {{ skill }}
        </li>
      </ul>
    </section>
  </div>
</template>
