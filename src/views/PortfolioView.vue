<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import PageHeading from '../components/PageHeading.vue'
import { projectFilters, projects } from '../data/projects'

const filter = ref<string>('All')

const visible = computed(() =>
  filter.value === 'All'
    ? projects
    : projects.filter((project) => project.category === filter.value),
)
</script>

<template>
  <div class="space-y-10">
    <PageHeading eyebrow="Selected work" title="Portfolio" />

    <div role="tablist" aria-label="Filter projects" class="flex flex-wrap gap-2">
      <button
        v-for="option in projectFilters"
        :key="option"
        type="button"
        role="tab"
        :aria-selected="option === filter"
        :class="[
          'rounded-full border px-4 py-2 text-sm transition-colors',
          option === filter
            ? 'border-accent bg-accent text-ink'
            : 'border-line bg-elevated text-muted hover:text-body',
        ]"
        @click="filter = option"
      >
        {{ option }}
      </button>
    </div>

    <TransitionGroup tag="ul" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" name="project">
      <li v-for="(project, index) in visible" :key="project.name">
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex h-full flex-col rounded-2xl border border-line bg-elevated p-5 transition-colors hover:border-accent/60"
        >
          <div class="overflow-hidden rounded-xl border border-line bg-surface">
            <img
              :src="project.image"
              alt=""
              loading="lazy"
              class="aspect-3/2 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <div class="mt-5 flex items-start justify-between">
            <span class="font-mono text-xs text-teal">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <ArrowUpRight
              :size="16"
              :stroke-width="1.75"
              aria-hidden="true"
              class="text-muted transition-colors group-hover:text-accent"
            />
          </div>

          <h3 class="mt-3 font-display text-base font-semibold leading-snug text-white">
            {{ project.name }}
          </h3>

          <div class="mt-4 flex flex-wrap items-center gap-2">
            <span
              class="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
            >
              {{ project.tag }}
            </span>
            <span v-for="item in project.stack" :key="item" class="text-xs text-muted">
              {{ item }}
            </span>
          </div>
        </a>
      </li>
    </TransitionGroup>

    <p
      v-if="visible.length === 0"
      class="rounded-2xl border border-dashed border-line p-10 text-center text-sm text-muted"
    >
      No projects in this category yet.
    </p>
  </div>
</template>

<style scoped>
.project-enter-active,
.project-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.project-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.project-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.project-move {
  transition: transform 0.25s ease;
}
</style>
