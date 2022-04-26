<template>
  <div>
    <h1 v-text="msg"></h1>
    TEST
  </div>
</template>

<script>
import cards from '../assets/data.json';

  export default {
    data() {
      return {
        msg: "hello from Flashcard.vue",
        cards: cards
      }
    }
  }
</script>