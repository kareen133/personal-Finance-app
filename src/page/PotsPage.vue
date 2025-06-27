<script setup>


//import Transanctions from '../components/Transanctions.vue'
import Pots from '../components/Pots.vue'
import { RouterLink, RouterView } from 'vue-router'
import data from '../assets/data.json'
const pots = data.pots

const transactions = data.transactions

// Group and sum transactions by name
const currentSpending = {}

transactions.forEach(tx => {
  // Use absolute value to ignore negative sign
  const amount = Math.abs(tx.amount)

  if (!currentSpending[tx.name]) {
    currentSpending[tx.name] = 0
  }
  currentSpending[tx.name] += amount
})

// Get current spent for a name
function getCurrent(name) {
    console.log('currentSpending', currentSpending[name])
  return currentSpending[name] ?? 0
}

// Compute progress percentage
function getProgress(Pot) {
  return Math.min(100, Math.round((Pot.total / Pot.target) * 100))
}

function getTransactionsForname(name) {
  return transactions.filter(tx => tx.name === name)
}
</script>  <template>
  <div>
    <h1 class="text-2xl font-bold text-gray-700 mb-6">Pots</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(Pot, index) in pots"
        :key="index"
        class="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl space-y-4"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-gray-800">{{ Pot.name }}</h2>
        </div>

        <div class="flex justify-between items-center text-sm text-gray-600">
          <p>Total Saved</p>
          <h3 class="text-base font-medium text-gray-800">${{ Pot.total }}</h3>
        </div>

        <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-300"
            :style="{
              width: getProgress(Pot) + '%',
              backgroundColor: Pot.theme
            }"
          ></div>
        </div>

        <div class="divide-y divide-gray-100 text-sm text-gray-700 max-h-48 overflow-y-auto">
          <div
            v-for="(tx, i) in getTransactionsForname(Pot.name)"
            :key="i"
            class="flex justify-between py-1"
          >
            <span class="truncate max-w-[40%]">{{ tx.name }}</span>
            <span>${{ Math.abs(tx.amount).toFixed(2) }}</span>
            <span class="text-gray-500">{{ new Date(tx.date).toLocaleDateString() }}</span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <button
            class="flex-1 px-6 py-2 rounded-md text-gray-700 bg-gray-200"
            @click="$emit('addToPot', Pot)"
          >
            + Add Money
          </button>
          <button
            class="flex-1 px-6 py-2 rounded-md text-gray-700 bg-gray-200"
            @click="$emit('withdrawFromPot', Pot)"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped>

</style>
