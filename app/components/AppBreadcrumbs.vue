<!-- components/AppBreadcrumbs.vue -->
<template>
  <div>
    <UBreadcrumb :items="items" />
    <!-- <pre>{{ items }}</pre> -->
  </div>
</template>

<script setup>
import { useBreadcrumbs } from '~/composables/useBreadcrumbs'

const { items } = useBreadcrumbs()
</script>
