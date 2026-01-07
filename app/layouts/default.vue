<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="default"
      v-model:open="open"
      collapsible
      resizable
      class="bg-elevated/25"
    >
      <template #header="{ collapsed }">
        Header {{ collapsed ? 'Collapsed' : 'Expanded' }}
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="links"
          orientation="vertical"
          tooltip
          popover
        />
      </template>
    </UDashboardSidebar>
    <div class="flex-1">
      <UDashboardNavbar

        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
          <div class="ml-2">
            <!-- <UBreadcrumb
              :items="[
                { label: 'Home', to: '/' },
                { label: 'Contacts', to: '/contacts' },
                { label: 'Contact Name', to: '/contacts/1' }
              ]"
            /> -->
            <AppBreadcrumbs />
          </div>
        </template>
      </UDashboardNavbar>
      <main
        id="content"
        role="main"
        class="p-6 min-h-screen bg-white flex-1 grid"
      >
        <NuxtPage />
      </main>
    </div>
  </UDashboardGroup>
</template>

<script setup>
const open = ref(false)
const links = [
  { label: 'Home', to: '/' },
  { label: 'Contacts', to: '/contacts' }
//   { label: 'Plans', to: '/plans' },
//   { label: 'Quotes', to: '/quotes' }
]
</script>
