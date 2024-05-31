<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="app-all">
    <header class="container-fluid pt-4 ">
      <div class="wrapper w-90">
        <HelloWorld msg="" />        
      </div>      
    </header>
    
    <RouterView />
  </div>
</template>

<style scoped>
.app-all{
  background: #000000;
}
img{
  max-width: 100%;
}
</style>
