<!-- components/PlanHeader.vue -->
<template>
  <UCard class="flex items-center justify-between p-4">
    <div>
      <h2 class="text-xl font-semibold">
        {{ plan.name }}
      </h2>
      <p class="text-sm text-gray-500">
        {{ plan.type }}
      </p>
    </div>

    <UButton
      size="sm"
      color="primary"
      icon="i-heroicons-cog"
    >
      Action
    </UButton>
  </UCard>
</template>

<script setup>
defineProps({
  plan: {
    type: Object,
    required: true,
    default: () => ({ name: 'Gold Plan', type: 'Premium' })
  }
})
</script>
