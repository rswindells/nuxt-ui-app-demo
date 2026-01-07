<template>
  <div class="">
    <div class="flex items-start justify-start gap-4 p-6 text-black rounded-md min-h-125">
      <h2 class="text-xl font-semibold">
        Overview details for {{ plan.name }}
      </h2>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

// For PoC, mock data
const plan = {
  id: route.params.planId,
  name: 'Some plan',
  lastActivity: '2 days ago'
}
</script>
