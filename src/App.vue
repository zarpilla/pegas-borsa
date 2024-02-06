<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div >
    <header class="container">
      <div class="wrapper">
        <HelloWorld msg="Borsa de feina i pràctiques" />        
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
