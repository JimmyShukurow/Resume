<script setup lang="ts">
import { Briefcase, Download, GraduationCap } from 'lucide-vue-next'
import PageHeading from '../components/PageHeading.vue'
import TimelineSection from '../components/TimelineSection.vue'
import { education, experience } from '../data/resume'
</script>

<template>
  <div class="space-y-12">
    <PageHeading eyebrow="Background" title="Resume" />

    <TimelineSection
      id="experience-heading"
      title="Experience"
      :icon="Briefcase"
      :entries="experience"
    />

    <TimelineSection
      id="education-heading"
      title="Education"
      :icon="GraduationCap"
      :entries="education"
    />

    <div class="flex justify-end border-t border-line pt-6">
      <a
        href="#"
        class="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-ink"
      >
        <Download :size="16" :stroke-width="1.75" aria-hidden="true" />
        Download CV
      </a>
    </div>
  </div>
</template>
