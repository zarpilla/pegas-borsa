<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import JobsList from "../components/JobsList.vue";
import CategoriesList from "../components/CategoriesList.vue";
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const categoryId = ref('')
categoryId.value = route.params.categoryId as string



watch(
  () => route.params.categoryId,
  async (newValue) => {
    categoryId.value = route.params.categoryId as string
  }
)

</script>

<template>
  <main>    

    <div class="container">
      <img src="@/assets/taulell.svg" class="mt-5 ps-5 pe-5 taulell" alt="" />
    </div>
    

    <CategoriesList :category-id="categoryId" />
    <div class="container">
      <TheWelcome />
      <JobsList />  
    </div>
    
  </main>
</template>
<style scoped>
.taulell{
  max-width: 100%;
}
</style>

