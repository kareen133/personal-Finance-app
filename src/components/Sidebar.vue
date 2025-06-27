<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

import {
  Home,
  Repeat,
  ChartPie,
  Receipt,
  ReceiptText,
} from 'lucide-vue-next'

const isCollapsed = ref(false)

function checkScreen() {
  isCollapsed.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen)
})
</script>

<template>
  <div class="flex min-h-screen">
    <div
      :class="[
        'transition-all duration-300 ease-in-out',
        'border-r border-white m-2 rounded-md',
        isCollapsed ? 'w-20' : 'w-64'
      ]"
      style="background-color:#1E1B22"
    >
      <div class="py-4 px-4 flex justify-between items-center">
        <h2 v-if="!isCollapsed" class="text-xl font-bold text-white">Finance</h2>
        <h2 v-else class="text-xl font-bold text-white">F</h2>
      </div>

      <nav class="flex flex-col space-y-2 text-gray-100 px-2">
        <RouterLink
          to="/overview"
          class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200"
        >
          <Home class="w-5 h-5" />
          <span v-if="!isCollapsed">Overview</span>
        </RouterLink>

        <RouterLink
          to="/transactions"
          class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200"
        >
          <Repeat class="w-5 h-5" />
          <span v-if="!isCollapsed">Transactions</span>
        </RouterLink>

        <RouterLink
          to="/budgets"
          class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200"
        >
          <ChartPie class="w-5 h-5" />
          <span v-if="!isCollapsed">Budgets</span>
        </RouterLink>

        <RouterLink
          to="/pots"
          class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200"
        >
          <Receipt class="w-5 h-5" />
          <span v-if="!isCollapsed">Pots</span>
        </RouterLink>

        <RouterLink
          to="/recurring"
          class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200"
        >
          <ReceiptText class="w-5 h-5" />
          <span v-if="!isCollapsed">Recurring Bills</span>
        </RouterLink>
      </nav>
      <div class="flex justify-center mt-20">
        <button
          class="flex justify-center text-white text-sm p-1"
          @click="isCollapsed = !isCollapsed"
          aria-label="Toggle Sidebar"
        >
          {{ isCollapsed ? '▶' : '◀' }}
        </button>
      </div>
    </div>
  </div>
</template>
