<!-- pages/contacts/[contactId].vue -->
<template>
  <div class="space-y-6 outline outline-black grid grid-cols-[200px_1fr] overflow-auto">
    <div class="min-w-50 pr-2">
      <ContactSubNav v-if="showContactNav" />
      <PlanSubNav v-else />
    </div>

    <div class="outline outline-white   grow p-3">
      <ContactHeaderCard
        v-if="showContactNav"
        :contact="{ name: 'Contact Name', email: 'contact@example.com' }"
        class="mb-8"
      />
      <PlanHeaderCard
        v-else
        :plan="{ name: 'Plan Name', status: 'Active' }"
        class="mb-8"
      />
      <NuxtPage />
    </div>
    <p class="mt-auto">
      Bottom content
    </p>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const showContactNav = computed(() =>
  !route.fullPath.includes('/plans/')
)
</script>
