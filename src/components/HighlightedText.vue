<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: string
  highlights: string[]
}>()

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const parts = computed(() => {
  if (props.highlights.length === 0) return [props.text]
  const pattern = new RegExp(`(${props.highlights.map(escapeRegExp).join('|')})`, 'g')
  return props.text.split(pattern)
})
</script>

<template>
  <template v-for="(part, index) in parts" :key="index">
    <strong v-if="highlights.includes(part)" class="font-semibold text-accent">{{ part }}</strong>
    <template v-else>{{ part }}</template>
  </template>
</template>
