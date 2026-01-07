<!-- pages/contacts/[contactId].vue -->
<template>
  <AppPageWrapper class="space-y-6 grid grid-cols-[200px_1fr]">
    <div class="min-w-50 pr-2">
      <PlanSubNav :back-button="false" />
    </div>

    <div class="outline outline-white   grow p-3">
      <PlanHeaderCard

        :plan="{ name: 'Plan Name', status: 'Active' }"
        class="mb-8"
      />
      <NuxtPage />
    </div>
    <p class="mt-auto">
      Bottom content
    </p>
  </AppPageWrapper>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>
