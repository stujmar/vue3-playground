<template>
  <div>
    <h1 v-text="msg"></h1>
    <div class="border my10">
      <h2 v-text="flipped ? '' : cards[0].name"></h2>
    </div>
    <div v-for="card in cards" :key="card.id" class="border w-max mx-auto m-2 px-2">
      <div v-text="card.name"></div>
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
        flipped: false
      }
    }
  }
</script>