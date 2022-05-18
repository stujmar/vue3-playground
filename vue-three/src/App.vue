<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="bg-blue-400 h-screen">
    <NavBar heading="CSS Animation" />
    <router-view></router-view>
  </div>
</template>
