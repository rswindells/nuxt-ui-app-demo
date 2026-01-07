<!-- pages/contacts/index.vue -->
<template>
  <UCard>
    <h2 class="text-lg font-semibold mb-4">
      Plans List Page
    </h2>

    <ul class="space-y-2">
      <li
        v-for="p in plans"
        :key="p.id"
      >
        <ULink :to="`/plans/${p.id}`">
          {{ p.name }}
        </ULink>
      </li>
    </ul>
  </UCard>
</template>

<script setup>
const plans = [
  { id: 'p1', name: 'Gold Plan' },
  { id: 'p2', name: 'Silver Plan' }
]
</script>
