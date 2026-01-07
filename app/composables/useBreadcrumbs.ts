// composables/useBreadcrumbs.ts
export const useBreadcrumbs = () => {
  const route = useRoute()

  // Dummy data for PoC
  const contactName = 'Alice Johnson'
  const planName = 'Gold Plan'

  const items = computed(() => {
    const crumbs = []

    const { contactId, planId } = route.params
    const isContactPath = route.path.startsWith('/contacts')
    const isPlanPath = route.path.startsWith('/plans')

    // Contact hierarchy: contacts -> contact -> plans -> plan
    if (isContactPath) {
      crumbs.push({
        label: 'Contacts',
        to: '/contacts'
      })

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
    }

    // Plan hierarchy: plans -> plan
    if (isPlanPath) {
      crumbs.push({
        label: 'Plans',
        to: '/plans'
      })

      if (planId) {
        crumbs.push({
          label: planName,
          to: `/plans/${planId}`
        })
      }

      if (route.path.endsWith('/notes')) {
        crumbs.push({
          label: 'Notes',
          to: route.fullPath
        })
      }

      if (route.path.endsWith('/history')) {
        crumbs.push({
          label: 'History',
          to: route.fullPath
        })
      }
    }

    return crumbs
  })

  return { items }
}
