<template>

    <div class="border shadow rounded-md text-gray-500 ml-auto w-max mt-4 mr-4 px-2 py-1">
      Cart ({{cart.length}})
    </div>

  <div class="m-4 p-4 shadaow flex justify-center gap-6">
      <product-display 
        v-for="product in data"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart()"
        @remove-from-cart="removeFromCart()"
        message="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ProductDisplay from './components/ProductDisplay.vue';
import productData from './resources/productData';
export default {
  name: 'App',
  components: {
    ProductDisplay
  },
  computed: {
    title(product) {
      return this.brand + ' ' + `${product}`;
    }
  },
  mounted() {
    let storeData = productData.map((item) => {
      item.activeProductColor = item.variants[0].color;
      return item;
    })
    this.data = storeData
  },
  data() {
    return {
      brand: "GoStuGo",
      data: [],
      activeProduct: {},
      cart: ["test", "test"],
    }
  },
  methods: {
    addToCart() {
      this.cart.push("test");
    },
    removeFromCart() {
      this.cart.pop()
    },
    updateBorder(id, color) {
      let indexOne = this.data.findIndex(product => product.id === id);
      this.data[indexOne].activeProductColor = color;
    },
    changeStock(id, amount) {
      let index = this.data.findIndex(product => product.id === id);
      this.data[index].inventory = this.data[index].inventory + amount;
    },
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
