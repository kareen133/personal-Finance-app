<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="flex min-h-screen">
    <Sidebar />

    <div class="flex-1 p-6">
      <router-view />
    </div>
  </div>
</template>
