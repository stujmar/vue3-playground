<template>
      <div class="w-max relative rounded shadow" :style="{ border: `5px solid ${activeColor}`}">
          <div class="absolute">
            <button class="w-4 h-4 bg-white leading-3 rounded font-bold mr-2" @click="changeStock(product.id, 1)">+</button>
            <button class="w-4 h-4 bg-white leading-3 rounded font-bold" @click="changeStock(product.id, -1)">-</button>
          </div>          
          <img class="" :src="product.image" width=200 />
          {{ product.name }}
          <p v-if="product.inventory >= 10">{{product.inventory}} In Stock</p>
          <p v-else-if="product.inventory > 0 && product.inventory < 10">Only {{product.inventory}} Left.</p>
          <p v-else>Out of Stock</p>
          <div class="flex justify-between pr-2">
            <div class="flex gap-2 pl-2">
              <button 
                v-for="option in product.variants"
                :key="option.id"
                @click="updateBorder(option.color)"
                class="w-6 h-6 rounded-full border border-black"
                :style="{background: option.color}"></button>
            </div>
            <div class="flex gap-1 pl-2">
              <div v-for="size in product.sizes" :key="size" class="text-sm text-gray-400 hover:text-gray-600 font-bold cursor-pointer">{{size}}</div>
            </div>
        </div>

        <div v-if="premium">this is a premium product</div>

        <ul class="p-2 border border-green-200 m-1">
          <li 
            v-for="detail in product.details" 
            :key="detail"
            class="text-gray-500 text-left"
            >- {{detail}}</li>
        </ul>
        <div v-if="product.onSale" class="shadow-lg absolute top-0 right-0 bg-yellow-300 font-bold p-1">On Sale!</div>
        <button 
           v-on:click="addToCart()"
           :disabled="product.inventory === 0"
           :class="product.inventory === 0 ? 'bg-gray-300 border-gray-400' : 'bg-green-400 border-green-500'"
           v-text="product.inventory === 0 ? 'Out of Stock' : 'Add to Cart'"
           class="px-2 mb-2 font-bold text-white shadow-md border mt-1 hover:bg-green-500 rounded"></button>
        <!-- <button v-else class="px-2 mb-2 font-bold text-white shadow-md border border-gray-500 mt-1 bg-gray-400 hover:bg-gray-500 rounded">Out of Stock</button> -->
        <button v-on:click="removeFromCart()" class="px-2 mb-2 font-bold text-white shadow-md border border-green-500 mt-1 bg-green-400 hover:bg-green-500 rounded">Remove</button>
      </div> 
</template>

<script>
    export default {
        name: "ProductDisplay",
        data () {
            return {
                activeColor: this.product.variants[0].color
            }
        },
        props: {
            product: Object,
            message: String,
            premium: Boolean,
        },
        methods: {
            updateBorder(color) {
                console.log(color);
                this.activeColor = color;
            },
            addToCart() {
                this.$emit('add-to-cart');
            },
            removeFromCart() {
                this.$emit('remove-from-cart');
            }
        },
        mounted() {
        },
    }
</script>
