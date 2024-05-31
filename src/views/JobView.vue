<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import JobDetail from "../components/JobDetail.vue";
import CategoriesList from "../components/CategoriesList.vue";
import TheHeader from "../components/TheHeader.vue";
import { ref } from "vue";
import router from "@/router";

const typeId = ref("treball")

typeId.value = router.currentRoute.value.params.typeId as string;

</script>

<template>
  <main>
    <TheHeader :typeId="typeId" />
    <CategoriesList :typeId="typeId" />
    <div class="container">
      <JobDetail />
    </div>
  </main>
</template>
