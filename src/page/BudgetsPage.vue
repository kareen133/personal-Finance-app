<script setup>

import Budgets from '../components/Budgets.vue'
import { RouterLink, RouterView } from 'vue-router'
import data from '../assets/data.json'
const budgets = data.budgets

const transactions = data.transactions

const currentSpending = {}

transactions.forEach(tx => {
  const amount = Math.abs(tx.amount)

  if (!currentSpending[tx.category]) {
    currentSpending[tx.category] = 0
  }
  currentSpending[tx.category] += amount
})

function getCurrent(category) {
    console.log('currentSpending', currentSpending[category])
  return currentSpending[category] ?? 0
}

function getProgress(budget) {
  const current = getCurrent(budget.category)
  return Math.min(100, Math.round((current / budget.maximum) * 100))
}

function getTransactionsForCategory(category) {
  return transactions.filter(tx => tx.category === category)
}
</script>   
<template>
 <h1 class="text-xl font-bold text-gray-600 space-y-2 mb-4">Budgets
</h1>
  <div class="flex gap-6 flex-wrap md:flex-nowrap">
    <div class="w-full md:w-1/3">
      <Budgets />
    </div>

    <div class="flex-1 space-y-6">
      <div
        v-for="(budget, index) in budgets"
        :key="index"
        class="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl mx-auto space-y-4"
      >
        <!-- Header -->
        <div class="space-y-1">
          <h1 class="text-lg font-semibold">{{ budget.category }}</h1>
          <p class="text-gray-500 text-sm cursor-pointer hover:underline">
            Maximum of ${{ budget.maximum }}
          </p>
        </div>

        <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-300"
            :style="{
              width: getProgress(budget) + '%',
              backgroundColor: budget.theme
            }"
          ></div>
        </div>

        <div class="bg-gray-100 space-y-3 p-4 rounded-md">
          <h2 class="font-semibold text-sm text-gray-800">Latest Spending</h2>

          <div
            v-for="(tx, i) in getTransactionsForCategory(budget.category)"
            :key="i"
            class="flex justify-between items-center text-sm text-gray-700"
          >
            <div class="flex items-center gap-2 w-1/2">
              <img :src="tx.avatar" alt="avatar" class="w-8 h-8 rounded-full object-cover" />
              <span class="truncate">{{ tx.name }}</span>
            </div>

            <div class="flex flex-col text-right w-1/2">
              <span>${{ Math.abs(tx.amount).toFixed(2) }}</span>
              <span class="text-xs text-gray-500">
                {{ new Date(tx.date).toLocaleDateString() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>
