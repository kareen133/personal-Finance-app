<script setup>
import DoughnutChart from './DoughnutChart.vue'
import data from '../assets/data.json'
import { ref } from 'vue';
const budgets = data.budgets
const props = defineProps({
  showCard: Boolean
})
</script>

<template>
  <div class="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl mx-auto">
    <div class="flex flex-col sm:flex-row justify-between mb-6 gap-4">
      <p class="text-gray-500 text-sm">Budgets</p>
      <RouterLink
        to="/budgets"
        class="text-gray-500 text-sm cursor-pointer hover:underline self-start sm:self-center"
      >
        See Details
      </RouterLink>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <div class="bg-white rounded-2xl shadow-lg max-w-sm w-full p-4 md:p-6">
        <DoughnutChart />
      </div>

      <div v-if="showCard" class="grid grid-cols-1 gap-4 w-full md:w-2/3">
        <div
          v-for="(budget, index) in budgets"
          :key="index"
          :style="{ border: '1px solid ' + budget.theme }"
          class="bg-white rounded-2xl shadow-lg p-4 text-center"
        >
          <p class="text-sm text-gray-700 truncate">{{ budget.category }}</p>
          <p class="text-lg font-bold text-gray-700">${{ budget.maximum }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
