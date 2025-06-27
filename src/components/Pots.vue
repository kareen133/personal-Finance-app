<script setup>
import data from '../assets/data.json'
import { RouterLink } from 'vue-router'

import {

  Receipt,
  
} from 'lucide-vue-next'
const pots = data.pots
</script>

<template>
  <div class="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl mx-auto">
    <div class="flex flex-col md:flex-row justify-between mb-6 gap-6">
      <p class="text-gray-500 text-sm">Pots</p>
      <RouterLink to="/pots" class="text-gray-500 text-sm cursor-pointer hover:underline self-start md:self-center">
        See Details
      </RouterLink>
    </div>

    <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
      <div
        style="background-color:#F8F8F8"
        class="rounded-2xl p-6 w-full md:w-1/2 shadow-md min-h-[180px]"
      >
        <div class="flex justify-between items-center">
          <Receipt class="w-9 h-9 text-gray-700" />
          <div>
            <p class="text-sm text-gray-600">Total Spend</p>
            <h1 class="text-3xl font-semibold text-gray-600 mt-2">$123,445</h1>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-2/3">
        <div
          v-for="(pot, index) in pots"
          :key="index"
          class="flex items-start text-left text-gray-600"
        >
          <div
            :style="{ backgroundColor: pot.theme }"
            class="w-1 h-full mr-4 rounded"
          ></div>
          <div>
            <p class="text-sm truncate max-w-xs">{{ pot.name }}</p>
            <p class="text-lg">${{ pot.total }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
