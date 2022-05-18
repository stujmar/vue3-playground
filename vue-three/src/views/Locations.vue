<template>
  <div>
    <h1 class="text-center m-6 text-2xl uppercase font-bold text-blue-900">Locations</h1>
    <ul>
      <li 
        v-for="location in locations"
        class="flex w-max mx-auto"
        :key="location.id">
        <router-link class="font-medium text-xl text-blue-900 hover:text-blue-600" :to="'/location/' + location.slug">{{ location.name }}</router-link>
      </li>
    </ul>
  </div>
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