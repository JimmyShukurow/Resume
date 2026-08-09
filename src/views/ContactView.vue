<script setup lang="ts">
import { ref, computed } from 'vue'
import { CheckCircle2Icon, Loader2Icon, SendIcon } from 'lucide-vue-next'
import PageHeading from '../components/PageHeading.vue'
import LocationMap from '../components/LocationMap.vue'
import emailjs from '@emailjs/browser'

type Status = 'idle' | 'sending' | 'sent'

const initialForm = { name: '', email: '', subject: '', message: '' }

const form = ref({ ...initialForm })
const status = ref<Status>('idle')

const fullName = computed(() => form.value.name.trim())
const email = computed(() => form.value.email.trim())
const subject = computed(() => form.value.subject.trim())
const message = computed(() => form.value.message.trim())

const isDisabled = computed(
  () =>
    !form.value.name.trim() ||
    !form.value.email.trim() ||
    !form.value.message.trim() ||
    status.value === 'sending',
)

function update(field: keyof typeof initialForm, value: string) {
  form.value[field] = value
  if (status.value === 'sent') status.value = 'idle'
}

const sendEmail = async () => {
  status.value = 'sending'

  try {
    await emailjs.send(
      'service_ra5n9cp',
      'template_1joytjl',
      {
        name: fullName.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      },
      'tldOTuEHVBX9rDvfU',
    )
    window.setTimeout(() => {
      status.value = 'sent'
      form.value = { ...initialForm }
    }, 900)
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

const fieldClass =
  'w-full rounded-xl border border-line bg-elevated px-4 py-3 text-sm text-body placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none'
</script>

<template>
  <div class="space-y-10">
    <PageHeading eyebrow="Get in touch" title="Contact" />

    <LocationMap />

    <section aria-labelledby="contact-form-heading">
      <h3 id="contact-form-heading" class="font-display text-lg font-semibold text-white">
        Contact Form
      </h3>

      <form class="mt-5 space-y-4" @submit.prevent="sendEmail">
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label for="name" class="sr-only">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              :value="form.name"
              placeholder="Full name"
              :class="fieldClass"
              @input="update('name', ($event.target as HTMLInputElement).value)"
            />
          </div>
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              :value="form.email"
              placeholder="Email address"
              :class="fieldClass"
              @input="update('email', ($event.target as HTMLInputElement).value)"
            />
          </div>
        </div>

        <div>
          <label for="subject" class="sr-only">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            :value="form.subject"
            placeholder="Subject"
            :class="fieldClass"
            @input="update('subject', ($event.target as HTMLInputElement).value)"
          />
        </div>

        <div>
          <label for="message" class="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            :value="form.message"
            placeholder="Your message"
            :class="`${fieldClass} resize-y`"
            @input="update('message', ($event.target as HTMLTextAreaElement).value)"
          />
        </div>

        <div class="flex flex-wrap items-center justify-end gap-4">
          <p
            v-if="status === 'sent'"
            role="status"
            class="flex items-center gap-2 text-sm text-teal"
          >
            <CheckCircle2Icon :size="16" :stroke-width="1.75" />
            Message sent — I'll get back to you soon.
          </p>
          <button
            type="submit"
            :disabled="isDisabled"
            class="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Loader2Icon
              v-if="status === 'sending'"
              :size="16"
              :stroke-width="2"
              class="animate-spin"
              aria-hidden="true"
            />
            <SendIcon v-else :size="16" :stroke-width="2" aria-hidden="true" />
            {{ status === 'sending' ? 'Sending…' : 'Send Message' }}
          </button>
        </div>
      </form>
    </section>
  </div>
</template>
