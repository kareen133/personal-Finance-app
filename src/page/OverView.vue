<script setup>
import Sidebar from '../components/Sidebar.vue'
import Cards from '../components/Cards.vue'
import Pots from '../components/Pots.vue'
import Transanctions from '../components/Transanctions.vue'
import Budgets from '../components/Budgets.vue'
import Bills from '../components/Bills.vue'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const showCard = ref(true)

</script>
<template>
  <div class="flex flex-col md:flex-row">

    <div class="flex-1">
      <h1 class="text-xl font-bold text-gray-600 space-y-2 mb-4">Overview</h1>
      <Cards />

      <div class="flex flex-col md:flex-row flex-wrap gap-6 mt-6">
        <div class="flex-1 min-w-[300px] space-y-6">
          <Pots />
          <Transanctions />
        </div>

        <div class="flex-1 min-w-[300px] space-y-6">
          <Budgets :showCard="showCard" />
          <Bills />
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped>

</style>
