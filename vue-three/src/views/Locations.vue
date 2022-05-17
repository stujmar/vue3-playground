<template>
  <h1>Locations</h1>
  <ul>
    <li v-for="location in locations">
      <router-link :to="'/location/' + location.slug">{{ location.name }}</router-link>
    </li>
  </ul>
</template>

<script>
import locations from '../../src/locations.json';
  export default {
    data() {
      return {
        locations: locations.destinations
      }
    }
  }
</script>