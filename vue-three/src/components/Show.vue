<template>
  <div>
    <h1>Hello World</h1>
    <p>This is the app.vue</p>
    <div class="pb-2">{{msg}}</div>
  </div>
</template>

<script>


export default ({
  setup() {
    const msg = 'Hello from the composition API'
    return {
      msg
    }
  },
})
</script>
