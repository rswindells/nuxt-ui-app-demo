<!-- components/ContactHeader.vue -->
<template>
  <UCard class="flex items-center justify-between p-4">
    <div>
      <h2 class="text-xl font-semibold">
        Contact Header for {{ contact.name }}
      </h2>
    </div>

    <UButton
      size="sm"
      color="primary"
      icon="i-heroicons-pencil"
    >
      Action
    </UButton>
  </UCard>
</template>

<script setup>
defineProps({
  contact: {
    type: Object,
    required: true,
    default: () => ({ name: 'John Doe', email: 'john@example.com' })
  }
})
</script>
