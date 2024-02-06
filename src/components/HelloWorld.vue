<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="d-flex">
    <RouterLink to="/">
      <img src="@/assets/logo.svg" class="logo-100" alt="" />
    </RouterLink>    

    <h1 class="mt-4 ms-auto">{{ msg }}</h1>    
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Space Grotesk';
  text-transform: uppercase;
  font-size: 1.5rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
