<template>
  <div class="m-4 p-4 shadaow border flex justify-center gap-6">
    <div v-for="product in data" :key="product.name" class="border-2 border-green-400 w-max relative">
      <img class="" :src="product.image" width=200 />
      {{ product.name }}
      <p v-if="product.inventory >= 10">{{product.inventory}} In Stock</p>
      <p v-else-if="product.inventory > 0 && product.inventory < 10">Only {{product.inventory}} Left.</p>
      <p v-else>Out of Stock</p>
      <div class="flex justify-between pr-2">
        <div class="flex gap-2 pl-2">
          <div v-for="option in product.varients" :key="option.id" class="w-4 h-4 border border-black" :style="{background: option.color}"></div>
        </div>
        <div class="flex gap-1 pl-2">
          <div v-for="size in product.sizes" :key="size" class="text-sm text-gray-400 hover:text-gray-600 font-bold cursor-pointer">{{size}}</div>
        </div>
      </div>


      <ul class="p-2 border border-green-200 m-1">
        <li 
          v-for="detail in product.details" 
          :key="detail"
          class="text-gray-500 text-left"
          >- {{detail}}</li>
      </ul>
      <div v-if="product.onSale" class="shadow-lg absolute top-0 right-0 bg-yellow-300 font-bold p-1">On Sale!</div>
      <button v-on:click="addToCart()" class="px-2 mb-2 font-bold text-white shadow-md border border-green-500 mt-1 bg-green-400 hover:bg-green-500 rounded">Add to Cart</button>
    </div>    
  </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
  },
  methods: {
    addToCart() {
      console.log("added to cart");
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
