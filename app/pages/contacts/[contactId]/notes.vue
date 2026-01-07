<template>
  <UCard>
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold">
          Notes
        </h3>

        <UButton
          icon="i-heroicons-plus"
          size="sm"
        >
          Add note
        </UButton>
      </div>

      <div
        v-if="notes.length === 0"
        class="text-sm text-gray-500"
      >
        No notes yet.
      </div>

      <ul class="space-y-3">
        <li
          v-for="note in notes"
          :key="note.id"
        >
          <UCard class="bg-gray-50">
            <p class="text-sm">
              {{ note.body }}
            </p>
            <div class="text-xs text-gray-400 mt-2">
              {{ note.author }} · {{ note.createdAt }}
            </div>
          </UCard>
        </li>
      </ul>
    </div>
  </UCard>
</template>

<script setup>
const notes = [
  {
    id: 1,
    body: 'Called customer regarding renewal options.',
    author: 'Jane Doe',
    createdAt: '2 days ago'
  },
  {
    id: 2,
    body: 'Sent follow-up email with pricing.',
    author: 'John Smith',
    createdAt: '5 days ago'
  }
]
</script>
