<script setup lang="ts">
import { AtSign, Github, Linkedin, MapPin, Phone, Youtube } from 'lucide-vue-next'
import { channels, profile, socials } from '../data/profile'

const channelIcons = [AtSign, Phone, MapPin]

const socialIcons: Record<string, typeof Youtube> = {
  YouTube: Youtube,
  LinkedIn: Linkedin,
  GitHub: Github,
}
</script>

<template>
  <aside class="rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:sticky lg:top-8">
    <div class="flex flex-col items-center text-center">
      <div class="relative">
        <img
          :src="profile.avatar"
          :alt="profile.name"
          class="h-28 w-28 rounded-2xl object-cover ring-1 ring-line sm:h-32 sm:w-32"
        />
        <span
          v-if="profile.available"
          class="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-surface bg-accent"
          aria-hidden="true"
        >
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"
          />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-ink" />
        </span>
      </div>

      <h1 class="mt-5 font-display text-xl font-semibold tracking-tight text-white">
        {{ profile.name }}
      </h1>
      <p
        class="mt-2 rounded-full border border-line bg-elevated px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-teal"
      >
        {{ profile.role }}
      </p>
      <p v-if="profile.available" class="mt-3 text-xs text-muted">Available for new work</p>
    </div>

    <div class="my-7 h-px bg-line" />

    <ul class="space-y-5">
      <li v-for="(channel, index) in channels" :key="channel.label" class="flex items-start gap-3">
        <span
          class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated text-accent"
        >
          <component
            :is="channelIcons[index] ?? AtSign"
            :size="16"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </span>
        <div class="min-w-0">
          <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {{ channel.label }}
          </p>

          <a
            v-if="channel.href"
            :href="channel.href"
            class="block truncate text-sm text-body transition-colors hover:text-accent"
          >
            {{ channel.value }}
          </a>
          <p v-else class="truncate text-sm text-body">{{ channel.value }}</p>
        </div>
      </li>
    </ul>

    <div class="my-7 h-px bg-line" />

    <ul class="flex items-center justify-center gap-3 pb-8">
      <li v-for="social in socials" :key="social.label" class="group relative">
        <a
          :href="social.href"
          :aria-label="social.label"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-elevated text-muted transition-colors hover:border-accent hover:text-accent group-focus-within:border-accent group-focus-within:text-accent"
        >
          <component :is="socialIcons[social.label] ?? Github" :size="17" aria-hidden="true" />
        </a>

        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-accent px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
        >
          {{ social.label }}
        </span>
      </li>
      <li class="group relative" data-id="element-56" data-mp="1k5nyir8di6hl">
        <a
          href="#"
          aria-label="LeetCode"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-elevated text-muted transition-colors hover:border-accent hover:text-accent group-focus-within:border-accent group-focus-within:text-accent"
          data-id="element-57"
          data-mp="1o6hmtlpq9nb0"
          ><svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-id="element-17"
            data-mp="6jd8zcbx4do4"
          >
            <path
              d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
              data-id="element-18"
              data-mp="lam4g22i4t96"
            ></path></svg></a
        ><span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-accent px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
          data-id="element-59"
          data-mp="15gjj1hsyqgd6"
          >LeetCode</span
        >
      </li>
    </ul>
  </aside>
</template>
