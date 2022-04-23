<template>
  <div>
    <h1>Hello World</h1>
    <p>This is the app.vue</p>
    <div class="pb-2">{{msg}}</div>
    <!-- button to toggle visibility -->
    <button @click="toggle()">Check if  is on</button>
    <div>{{ isOn }}</div>
  </div>
</template>

<script>


export default ({
  setup() {
    const msg = 'Hello from the composition API'
    let isOn = false
    // functio to toggle the state
    const toggle = () => {
      isOn = !isOn
    }
    return {
      msg,
      isOn,
      toggle
    }
  },
})
</script>
