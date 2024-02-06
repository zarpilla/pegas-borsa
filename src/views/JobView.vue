<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import JobDetail from "../components/JobDetail.vue";
import CategoriesList from "../components/CategoriesList.vue";
</script>

<template>
  <main>
    <CategoriesList />
    <div class="container">
      <JobDetail />
    </div>
  </main>
</template>
