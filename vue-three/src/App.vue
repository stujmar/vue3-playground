<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
  <button :onClick="toggleVisibility" >Check if Vue is working</button>
  <div v-if="isVisible">
    <p>It is!</p>
  </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
