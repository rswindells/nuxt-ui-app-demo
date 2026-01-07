<template>
  <div class="">
    <div class="flex items-start justify-start gap-4 p-6 text-black rounded-md min-h-[500px]">
      <h2 class="text-xl font-semibold">
        Overview details for {{ contact.name }}
      </h2>

      <div class="text-sm text-gray-500">
        {{ contact.email }}
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

// For PoC, mock data
const contact = {
  id: route.params.contactId,
  name: 'Alice Johnson',
  email: 'alice@example.com',
  planCount: 2,
  lastActivity: '2 days ago'
}
</script>
