<script setup>
import { ref } from 'vue'
import data from '../assets/data.json'


const transactions = data.transactions

const paidBillsTotal = transactions
  .filter(t => t.category === 'Bills' && t.recurring === true)
  .reduce((sum, t) => sum + Math.abs(t.amount), 0); 

  
</script><template>
 
   <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div
    class="flex flex-col justify-between bg-white p-4 rounded-lg text-center shadow-lg"
  >
    <p class="text-sm text-gray-600 mb-2">Paid Bill</p>
    <p class="text-lg font-bold text-gray-800">
      ${{ paidBillsTotal.toFixed(2) }}
    </p>
  </div>

  <div
    class="flex flex-col justify-between bg-white p-4 rounded-lg text-center shadow-lg"
  >
    <p class="text-sm text-gray-600 mb-2">Total Upcoming</p>
    <p class="text-lg font-bold text-gray-800">$194.98</p>
  </div>

  <div
    class="flex flex-col justify-between bg-white p-4 rounded-lg text-center shadow-lg"
  >
    <p class="text-sm text-gray-600 mb-2">Due Soon</p>
    <p class="text-lg font-bold text-gray-800">$59.98</p>
  </div>
</div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
