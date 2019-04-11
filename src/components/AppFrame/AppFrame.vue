<template>
  <v-layout
  >
    <v-content>
      <v-layout justify-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-layout>
    </v-content>

    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      fixed
      dark
      width='200'
    >
      <v-list>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="@/assets/me-thumb.jpeg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Haoyang Ding</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      
    </v-navigation-drawer>
  </v-layout>
</template>


<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


<script lang="ts" src="./AppFrame.ts">
</script>
