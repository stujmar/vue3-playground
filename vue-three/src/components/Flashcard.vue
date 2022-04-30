<template>
  <div>
    <h1 v-text="msg"></h1>
    <div class="border my10">
      <h2 v-text="flipped ? '' : cards[0].name"></h2>
      <h2 v-html="flipped ? cards[0].definition : ''"></h2>
    </div>
      <button type="button" @click="flipCard()">
        {{ flipped ? 'Flip' : 'Show' }}
      </button>
    <div v-for="card in cards" :key="card.id" class="border w-max mx-auto m-2 px-2">
      <div v-text="card.name"></div>
      <!-- button to flip card -->
    </div>
  <a class="w-full text-center text-sm text-gray-400" :href="readMoreUrl">Read more</a>
  </div>
</template>

<script>
import cards from '../assets/data.json';

  export default {
    data() {
      return {
        msg: "hello from Flashcard.vue",
        cards: cards,
        flipped: false,
        readMoreUrl: 'https://vitejs.dev/guide/features.html'
      }
    },
    methods: {
      flipCard() {
        this.flipped = !this.flipped;
      }
    }
  }
</script>