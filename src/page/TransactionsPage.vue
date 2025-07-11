<template>
  <h1 class="text-xl font-bold text-gray-600 mb-4">Transactions</h1>

  <div class="overflow-x-auto bg-white shadow-md rounded-lg p-4">
    <input
      v-model="searchQuery"
      placeholder="Search by name or category"
      class="mb-4 p-2 border rounded w-full max-w-sm"
      type="text"
    />

    <table class="min-w-full divide-y divide-gray-200 text-sm text-left">
      <thead class="bg-gray-100 text-gray-600 uppercase tracking-wider">
        <tr>
          <th class="px-6 py-3">Name</th>
          <th class="px-6 py-3">Category</th>
          <th class="px-6 py-3">Date</th>
          <th class="px-6 py-3 text-right">Amount</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 text-gray-700">
        <tr
          v-for="(tx, index) in paginatedData"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td class="px-6 py-4 flex items-center gap-3 whitespace-nowrap">
            <img :src="tx.avatar" alt="avatar" class="w-8 h-8 rounded-full object-cover" />
            <span>{{ tx.name }}</span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">{{ tx.category }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ new Date(tx.date).toLocaleDateString() }}</td>
          <td
            class="px-6 py-4 text-right whitespace-nowrap"
            :class="tx.amount < 0 ? 'text-red-500' : 'text-green-600'"
          >
            {{ tx.amount < 0 ? '-' : '+' }}${{ Math.abs(tx.amount).toFixed(2) }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4 flex justify-center flex-wrap gap-2">
      <button
        class="px-3 py-1 border rounded disabled:opacity-50"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        Prev
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-3 py-1 border rounded',
          currentPage === page ? 'bg-gray-300' : 'hover:bg-gray-100 cursor-pointer'
        ]"
      >
        {{ page }}
      </button>

      <button
        class="px-3 py-1 border rounded disabled:opacity-50"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import data from '../assets/data.json'
import { ref, computed, watch } from 'vue'

const transactions = data.transactions

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 5

const filteredData = computed(() => {
  if (!searchQuery.value) return transactions
  return transactions.filter((tx) =>
    tx.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    tx.category.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredData.value.length / itemsPerPage)))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredData.value.slice(start, start + itemsPerPage)
})

watch(searchQuery, () => {
  currentPage.value = 1
})

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function goToPage(page) {
  currentPage.value = page
}
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
}
</style>
