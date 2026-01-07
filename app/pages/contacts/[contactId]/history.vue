<template>
  <UCard>
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">
        Activity History
      </h3>

      <ul class="space-y-3">
        <li
          v-for="event in history"
          :key="event.id"
          class="flex gap-3"
        >
          <UIcon
            :name="event.icon"
            class="text-gray-400 mt-1"
          />

          <div>
            <p class="text-sm">
              {{ event.message }}
            </p>
            <p class="text-xs text-gray-400">
              {{ event.timestamp }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </UCard>
</template>

<script setup>
const history = [
  {
    id: 1,
    icon: 'i-heroicons-envelope',
    message: 'Email sent to contact',
    timestamp: '1 day ago'
  },
  {
    id: 2,
    icon: 'i-heroicons-pencil',
    message: 'Contact details updated',
    timestamp: '3 days ago'
  },
  {
    id: 3,
    icon: 'i-heroicons-document-text',
    message: 'Plan assigned: Gold Plan',
    timestamp: '1 week ago'
  }
]
</script>
