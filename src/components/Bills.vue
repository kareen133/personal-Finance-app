<script setup>
import { ref } from 'vue'
import data from '../assets/data.json'


const transactions = data.transactions

const paidBillsTotal = transactions
  .filter(t => t.category === 'Bills' && t.recurring === true)
  .reduce((sum, t) => sum + Math.abs(t.amount), 0); 

  
</script><template>
  <div class="bg-white rounded-2xl p-6 w-full max-w-4xl mx-auto">
    <div class="flex flex-col sm:flex-row justify-between mb-6 gap-4">
      <p class="text-gray-500 text-sm">Recurring Bills</p>
      <RouterLink
        to="/recurring"
        class="text-gray-500 text-sm cursor-pointer hover:underline self-start sm:self-center"
      >
        See Details
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div
        class="flex flex-col sm:flex-row justify-between bg-white p-4 rounded-lg text-center shadow-lg"
      >
        <p class="text-sm text-gray-600 mb-2 sm:mb-0">Paid Bill</p>
        <p class="text-lg font-bold text-gray-800">$190.00</p>
      </div>

      <div
        class="flex flex-col sm:flex-row justify-between bg-white p-4 rounded-lg text-center shadow-lg"
      >
        <p class="text-sm text-gray-600 mb-2 sm:mb-0">Total Upcoming</p>
        <p class="text-lg font-bold text-gray-800">$194.98</p>
      </div>

      <div
        class="flex flex-col sm:flex-row justify-between bg-white p-4 rounded-lg text-center shadow-lg"
      >
        <p class="text-sm text-gray-600 mb-2 sm:mb-0">Due Soon</p>
        <p class="text-lg font-bold text-gray-800">$59.98</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
