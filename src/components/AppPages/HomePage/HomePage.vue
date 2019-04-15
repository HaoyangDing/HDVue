<template>
  <v-layout>
    <!-- <v-flex xs12 sm6 offset-sm3> -->
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img :src="home_img"></v-img>
        <v-card-title class="justify-center">
          <div>
            <h3 class="headline mb-0" align="center">Haoyang Ding</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <div>{{ card_text }}</div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            v-for="button in buttons"
            :key="button.title"
            flat
            :to="button.link"
          >{{ button.title }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<style>
</style>


<script src="./HomePage.ts">
</script>