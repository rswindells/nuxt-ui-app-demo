<!-- pages/contacts/index.vue -->
<template>
  <UCard>
    <h2 class="text-lg font-semibold mb-4">
      Contacts
    </h2>

    <ul class="space-y-2">
      <li
        v-for="c in contacts"
        :key="c.id"
      >
        <ULink :to="`/contacts/${c.id}`">
          {{ c.name }}
        </ULink>
      </li>
    </ul>
  </UCard>
</template>

<script setup>
const contacts = [
  { id: 'c1', name: 'Alice' },
  { id: 'c2', name: 'Bob' }
]
</script>
