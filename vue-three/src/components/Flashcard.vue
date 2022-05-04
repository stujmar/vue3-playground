<template>
  <div>
    <div class="border m-4 font-bold text-xl">{{ cards[index].definition }}</div>
    <div class="flex gap-4 w-max mt-4 mx-auto">
      <button class="font-bold" v-text="`<=`"></button>
      <button type="button" class="font-bold" v-text="`flip`" @click="flipCard"></button>
      <button class="font-bold" v-text="`=>`"></button>
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
      }
    }
  }
</script>