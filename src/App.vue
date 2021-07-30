<template>
  <div class="m-4 p-4 shadaow border">
    <div class="border-2 border-red-300 w-max">
      <img width="200" v-bind:src="image" />
    <div>{{ product }}</div>
    </div>
  <div v-for="product in data" :key="product.name">
    {{ product.name }}
    <p v-if="product.inventory >= 10">{{product.inventory}} In Stock</p>
    <p v-else-if="product.inventory > 0 && product.inventory < 10">Only {{product.inventory}} Left. Running Low</p>
    <p v-else>Out of Stock</p>
  </div>
     <div class="border-2 border-red-300 w-max">
      <img width="200" v-bind:src="data[0].image" />
    <div>{{ data[0].name }}</div>
    </div>
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import productData from './resources/productData';
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      product: 'Socks',
      image: './assets/eeyore.png',
      data: productData,
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
