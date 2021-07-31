<template>
  <div class="border m-4">
  <div class="border shadow rounded-md text-gray-500 ml-auto w-max mt-4 mr-4 px-2 py-1">Cart ({{cart.length}})</div>
  <div class="m-4 p-4 shadaow flex justify-center gap-6">
    <div v-for="product in data" :key="product.name" class="border-2 border-green-400 w-max relative">
      <img class="" :src="product.image" width=200 />
      {{ product.name }}
      <p v-if="product.inventory >= 10">{{product.inventory}} In Stock</p>
      <p v-else-if="product.inventory > 0 && product.inventory < 10">Only {{product.inventory}} Left.</p>
      <p v-else>Out of Stock</p>
      <div class="flex justify-between pr-2">
        <div class="flex gap-2 pl-2">
          <div v-for="option in product.varients" :key="option.id" @mouseover="updateBorder(option.color)" class="w-6 h-6 rounded-full border border-black" :style="{background: option.color}"></div>
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
      <button v-if="product.inventory > 0" v-on:click="addToCart()" class="px-2 mb-2 font-bold text-white shadow-md border border-green-500 mt-1 bg-green-400 hover:bg-green-500 rounded">Add to Cart</button>
      <button v-else class="px-2 mb-2 font-bold text-white shadow-md border border-gray-500 mt-1 bg-gray-400 hover:bg-gray-500 rounded">Out of Stock</button>
      <button v-on:click="removeFromCart()" class="px-2 mb-2 font-bold text-white shadow-md border border-green-500 mt-1 bg-green-400 hover:bg-green-500 rounded">Remove</button>
    </div>    
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
      cart: ["test", "test"],
    }
  },
  methods: {
    addToCart() {
      this.cart.push("test");
    },
    removeFromCart() {
      this.cart.splice(0,1);
    },
    updateBorder(color) {
      console.log(color);
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
}
</style>
