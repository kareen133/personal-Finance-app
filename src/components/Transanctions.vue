<script setup>
import data from '../assets/data.json'

const transactions = data.transactions
</script>

<template>
  <div class="bg-white rounded-2xl p-6 w-full max-w-4xl">
   
    <div class="flex justify-between mb-6">
      <p class="text-gray-300 text-sm">Transactions</p>
      <RouterLink to="/transactions" class="text-gray-500 text-sm cursor-pointer hover:underline">
View All
</RouterLink>

    </div>

    <div
      v-for="(transaction, index) in transactions.slice(0, 5) "
      :key="index"
      class="flex justify-between items-center gap-6 border-b py-4"
    >
      <div class="flex items-center w-2/3 space-x-4">
        <img
          :src="transaction.avatar"
          alt="Profile"
          class="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p class="text-lg font-semibold text-gray-500 ">{{ transaction.name }}</p>
        </div>
      </div>

      <div class="text-right w-1/3">
        <p
          :class="[
            'text-sm',
            transaction.amount < 0 ? 'text-red-500' : 'text-green-600'
          ]"
        >
          {{ transaction.amount < 0 ? '-' : '+' }}${{ Math.abs(transaction.amount).toFixed(2) }}
        </p>
        <p class="text-sm text-gray-500 ">
          {{ new Date(transaction.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
