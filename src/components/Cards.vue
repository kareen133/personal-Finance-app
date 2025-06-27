<script setup>
import { ref } from 'vue'
import data from '../assets/data.json'
const balanceEntries = Object.entries(data.balance)

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount)
}


</script><template>
  <div class="flex flex-wrap gap-6 justify-center">
    <div
      v-for="([key, value], index) in balanceEntries"
      :key="key"
      :class="[
        'rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xs',
        index === 0 ? 'text-white' : 'bg-white text-gray-600'
      ]"
      :style="index === 0 ? { backgroundColor: '#1E1B22' } : {}"
    >
      <p
        class="text-sm uppercase tracking-wide mb-1 truncate"
        :class="index === 0 ? 'text-gray-300' : 'text-gray-600'"
      >
        {{ key }}
      </p>
      <h1 class="text-2xl font-bold truncate" :class="index === 0 ? 'text-white' : 'text-gray-600'">
        {{ formatCurrency(value) }}
      </h1>
    </div>
  </div>
</template>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
