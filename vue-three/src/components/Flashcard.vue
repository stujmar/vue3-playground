<template>
  <div>
    <Rotate />
    <div class="relative border m-4 font-bold h-40 w-90 text-xl bg-amber-50 shadow-md">
      <div class="absolute inset-0 m-auto h-min text-center">
        {{ flipped ? cards[index].definition : cards[index].name }}
      </div>
    </div>
    <div class="flex gap-4 w-max h-min mt-4 mx-auto">
      <button class="font-bold" @click="indexBack">
        <svg xmlns="http://www.w3.org/2000/svg" :class="`${isFirstCard(index) ? 'text-blue-500' : 'text-blue-50'} h-6 w-6`" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button type="button" class="text-xl font-medium uppercase text-amber-50 text-shadow-blue" v-text="`flip`" @click="flipCard"></button>
      <button class="font-bold" @click="indexForward">
        <svg xmlns="http://www.w3.org/2000/svg" :class="`${isLastCard(index) ? 'text-blue-500' : 'text-blue-50'} h-6 w-6`" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
 </div>
</template>

<script>
import cards from '../assets/data.json';
import Rotate from './Rotate.vue';

  export default {
    components: {
      Rotate
    },
    data() {
      return {
        msg: "hello from Flashcard.vue",
        cards: cards,
        index: 0,
        flipped: false,
        readMoreUrl: 'https://vitejs.dev/guide/features.html',
        amperTest: "Jack &amp; Jill",
        userInput: "default",
      }
    },
    methods: {
      flipCard() {
        console.log("flip");
        this.flipped = !this.flipped;
      },
      indexForward() {
        this.flipped  = false;
       this.index < this.cards.length - 1 ? this.index++ : this.index = this.index;
      },
      indexBack() {
        this.flipped  = false;
        this.index > 0 ? this.index-- : this.index = this.index;
      },
      isFirstCard(index) {
        return index === 0;
      },
      isLastCard(index) {
        return index === this.cards.length - 1;
      }
    }
  }
</script>