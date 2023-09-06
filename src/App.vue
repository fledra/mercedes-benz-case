<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style>
* {
  font-family: 'Fira Sans', sans-serif !important;
}

html,
body {
  width: 100%;
  min-height: 100vh;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
