<script setup>
import { ref } from 'vue'

defineProps({
  heading: String
})

const count = ref(0)
</script>

<template>
  <div class="bg-amber-50 p-6 pb-8 shadow text-center">
    <span class="text-xl font-bold uppercase text-blue-700">{{ heading }}</span>
    <div class="flex gap-2 w-max mx-auto">
      <router-link class="text-blue-700 hover:text-blue-500" exact-active-class="font-bold" to="/">Home</router-link>
      <router-link class="text-blue-700 hover:text-blue-500" exact-active-class="font-bold" to="/about">About</router-link>
      <router-link class="text-blue-700 hover:text-blue-500" exact-active-class="font-bold" to="/locations">Locations</router-link>
    </div>
  </div>
</template>


