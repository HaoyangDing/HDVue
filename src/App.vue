<template>
  <div id="app">
    <AppFrame></AppFrame>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script lang="ts" src="./App.ts">
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
