<!-- components/ContactSubNav.vue -->
<template>
  <UNavigationMenu
    :items="navItems"
    orientation="vertical"
  />
</template>

<script lang="ts" setup>
const route = useRoute()
const id = route.params.contactId

const navItems = [
  { label: 'Overview', to: `/contacts/${id}`, exact: true },
  { label: 'Notes', to: `/contacts/${id}/notes`, exact: true },
  { label: 'History', to: `/contacts/${id}/history`, exact: true },
  { label: 'Plans', to: `/contacts/${id}/plans`, exact: true }
]
</script>
