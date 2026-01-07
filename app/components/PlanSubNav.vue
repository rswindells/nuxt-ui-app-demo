<!-- components/PlanSubNav.vue -->
<template>
  <UButton
    icon="i-heroicons-arrow-left"
    variant="ghost"
    :to="backToPlans"
  >
    Back to plans
  </UButton>
  <UNavigationMenu
    :items="items"
    orientation="vertical"
  />
</template>

<script setup>
const route = useRoute()
const { contactId, planId } = route.params

const items = [
  { label: 'Overview', to: `/contacts/${contactId}/plans/${planId}` },
  { label: 'Billing', to: `/contacts/${contactId}/plans/${planId}/billing` },
  { label: 'History', to: `/contacts/${contactId}/plans/${planId}/history` }
]

const backToPlans
  = `/contacts/${route.params.contactId}/plans`
</script>
