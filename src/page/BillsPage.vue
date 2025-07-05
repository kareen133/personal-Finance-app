<script setup>

import Bills from '../components/Bills.vue'
import Budgets from '../components/Budgets.vue'
import { RouterLink, RouterView } from 'vue-router'
import data from '../assets/data.json'
const budgets = data.budgets

const transactions = data.transactions

transactions.filter(tx => tx.category === 'Bills')
console.log("transactions" , transactions.filter(tx => tx.category === 'Bills')
 )
</script>   
<template>
  <div class="flex flex-col md:flex-row gap-4">

   
    <div class="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl">
      <!-- Header Row -->
      <div class="flex justify-between mb-6">
        <p class="text-gray-500 text-sm">Transactions</p>
        <p class="text-gray-500 text-sm cursor-pointer hover:underline">View All</p>
      </div>

      <!-- Transactions List -->
      <div
        v-for="(transaction, index) in transactions.filter(tx => tx.category === 'Bills')"
        :key="index"
        class="flex justify-between items-center gap-6 border-b py-4"
      >
        <!-- Left: Avatar and Name -->
        <div class="flex items-center w-2/3 space-x-4">
          <img
            :src="transaction.avatar"
            alt="Profile"
            class="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p class="text-lg font-semibold text-gray-800">{{ transaction.name }}</p>
            <p class="text-sm text-gray-500">{{ transaction.category === 'Bills' }}</p>
          </div>
        </div>

        <!-- Right: Amount and Date -->
        <div class="text-right w-1/3">
          <p
            :class="[
              'text-sm',
              transaction.amount < 0 ? 'text-red-500' : 'text-green-600'
            ]"
          >
            {{ transaction.amount < 0 ? '-' : '+' }}${{ Math.abs(transaction.amount).toFixed(2) }}
          </p>
          <p class="text-sm text-gray-500">
            {{ new Date(transaction.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>




<style scoped>

</style>
