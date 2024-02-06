<script setup lang="ts">
import { ref } from 'vue'
import { Api } from '@/service/api/index'



const props = defineProps({
  categoryId: {
    type: String,
    default: ''
  }
});


const categories = ref([] as any[])

const fetch = async () => {
  categories.value = (await Api.categories.list()).data.data
}

fetch()

</script>

<template>
  <div class="categories-list">
    <div class="container">
    <div class="row">
      <div class="col zcol-md-3 text-center pt-3 pb-3">
        <RouterLink class="category" :class="{ 'active' : categoryId === '' }" to="/">Totes</RouterLink>
      </div>
      <div class="col zcol-md-3 text-center pt-3 pb-3" v-for="category in categories">
        <RouterLink class="category ms-auto me-auto" :class="{ 'active' : categoryId === category.attributes.slug }" :to="'/cat/' + category.attributes.slug">{{ category.attributes.name }}</RouterLink>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.categories-list{
  background: #000;
}
.category{
  background-color: #6D5EF7;
  color: #000;
  text-decoration: none;

  border-radius: 25px;
  letter-spacing: 1px;
  font-family: 'Space Grotesk',Helvetica,Arial,Lucida,sans-serif !important;
  font-weight: 700 !important;
  padding: 0.5rem 2em;
  display: inline-block;

  &.active{
    background-color: #fff;
    color: #000;
  }
}

</style>
