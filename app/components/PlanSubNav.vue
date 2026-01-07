<!-- components/PlanSubNav.vue -->
<template>
  <UButton
    v-if="backButton"
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

<script lang="ts" setup>
const route = useRoute()
const { planId } = route.params

const { backButton = true, urlPrefix = '' } = defineProps<{
  backButton?: boolean
  urlPrefix?: string
  // items?: Array<{ label: string; to: string }>
}>()

const items = [
  { label: 'Overview', to: `${urlPrefix}/plans/${planId}` },
  { label: 'Notes', to: `${urlPrefix}/plans/${planId}/notes` },
  { label: 'Something Else', to: `${urlPrefix}/plans/${planId}/history` }
]

const backToPlans
  = `/${urlPrefix}/plans`
</script>
