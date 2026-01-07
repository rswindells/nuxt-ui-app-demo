<!-- pages/contacts/[contactId]/plans.vue -->
<template>
  <UCard>
    <h3 class="text-md font-semibold mb-3">
      Plans
    </h3>

    <ul class="space-y-2">
      <li
        v-for="p in plans"
        :key="p.id"
      >
        <ULink :to="`/contacts/${contactId}/plans/${p.id}`">
          {{ p.name }}
        </ULink>
      </li>
    </ul>
  </UCard>
</template>

<script setup>
const route = useRoute()
const contactId = route.params.contactId

const plans = [
  { id: 'p1', name: 'Gold Plan' },
  { id: 'p2', name: 'Silver Plan' }
]
</script>
