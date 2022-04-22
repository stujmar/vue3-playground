<template>
  <div>
<!--     <h1>Hello World</h1>
    <p>This is the app.vue</p> -->
    <Show />
  <button :onClick="toggleVisibility" >Check if Vue is working</button>
  <div v-if="isVisible">
    <p>It is!</p>
  </div>
  </div>
</template>

<script>
import Show from './components/Show.vue'

export default {
  name: 'App',
  components: {
    Show
  },
  data() {
    return {
      msg: 'Welcome to My Vue.js App',
      isVisible: false
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
