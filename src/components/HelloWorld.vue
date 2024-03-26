<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="d-flex">
    <RouterLink to="/" class="ms-md-5 me-5">
      <img src="@/assets/logo-w.svg" class="logo-100" alt="" />
    </RouterLink>    

    <!-- <h1 class="mt-4 ms-auto">{{ msg }}</h1>     -->
    <div class="nav ms-auto me-md-5 ms-5">
      <a href="https://pegasdefoc.org" target="_blank" class="text">TORNAR A PEGÀS DE FOC</a>
    </div>
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
.text{
  color: var(--blanc, #FFF);
font-family: "Space Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1px;
text-transform: uppercase;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
