// composables/useBreadcrumbs.ts
export const useBreadcrumbs = () => {
  const route = useRoute()

  // Dummy data for PoC
  const contactName = 'Alice Johnson'
  const planName = 'Gold Plan'

  const items = computed(() => {
    const crumbs = [
      {
        label: 'Contacts',
        to: '/contacts'
      }
    ]

    const { contactId, planId } = route.params

    if (contactId) {
      crumbs.push({
        label: contactName,
        to: `/contacts/${contactId}`
      })
    }

    if (route.path.includes('/plans')) {
      crumbs.push({
        label: 'Plans',
        to: `/contacts/${contactId}/plans`
      })
    }

    if (planId) {
      crumbs.push({
        label: planName,
        to: `/contacts/${contactId}/plans/${planId}`
      })
    }

    if (route.path.endsWith('/notes')) {
      crumbs.push({
        label: 'Notes',
        to: route.fullPath
      })
    }

    return crumbs
  })

  return { items }
}
