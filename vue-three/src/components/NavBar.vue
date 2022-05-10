<script setup>
import { ref } from 'vue'

defineProps({
  heading: String
})

const count = ref(0)
</script>

<template>
  <div class="h-20 bg-white mb-10 p-6 shadow  text-center">
    <span class="text-xl font-bold uppercase text-blue-900">{{ heading }}</span>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
