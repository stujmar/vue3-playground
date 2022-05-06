<template>
  <div>
    <div class="relative border m-4 font-bold h-40 w-90 text-xl bg-gray-100 shadow-md">
      <div class="absolute inset-0 m-auto h-min">
        {{ flipped ? cards[index].definition : cards[index].name }}
      </div>
    </div>
    <div class="flex gap-4 w-max h-min mt-4 mx-auto">
      <button class="font-bold" v-text="`<=`" @click="indexBack"></button>
      <button type="button" class="font-bold" v-text="`flip`" @click="flipCard"></button>
      <button class="font-bold" v-text="`=>`" @click="indexForward"></button>
    </div>
 </div>
</template>

<script>
import cards from '../assets/data.json';

  export default {
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
    }
  }
</script>