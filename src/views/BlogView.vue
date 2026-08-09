<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next'
import PageHeading from '../components/PageHeading.vue'
import { posts } from '../data/posts'
</script>

<template>
  <div class="space-y-10">
    <PageHeading eyebrow="Writing" title="Blog" />

    <ul class="grid gap-4 sm:grid-cols-2">
      <li v-for="post in posts" :key="post.title">
        <article
          class="group flex h-full flex-col rounded-2xl border border-line bg-elevated p-6 transition-colors hover:border-accent/60"
        >
          <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">
            {{ post.kind }} <span class="text-muted">• {{ post.date }}</span>
          </p>
          <h3 class="mt-3 font-display text-lg font-semibold leading-snug text-white">
            {{ post.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            {{ post.excerpt }}
          </p>

          <a href="#" class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Read post
            <ArrowRightIcon
              :size="15"
              :stroke-width="1.75"
              aria-hidden="true"
              class="transition-transform group-hover:translate-x-1"
            />
          </a>
        </article>
      </li>
    </ul>
  </div>
</template>
