<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import PieChartdata from '../assets/data.json'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const Budgets = PieChartdata.budgets

const data = {
  labels: Budgets.map(item => item.category),
  datasets: [
    {
      data: Budgets.map(item => item.maximum),
      backgroundColor: Budgets.map(item => item.theme),
      hoverOffset: 6
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#6b7280'
      }
    },
  },
}
</script>

<style scoped>
:deep(.chartjs-render-monitor) {
  height: 300px !important;
  max-height: 100%;
  width: 100% !important;
}
</style>
