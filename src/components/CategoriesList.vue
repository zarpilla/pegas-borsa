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
  <div class="categories-list mt-5 pt-5">
    <div class="container">
    <div class="d-flex flex-wrap">
      <div class="item text-center pt-1 pb-3 me-md-3">
        <RouterLink class="category" :class="{ 'active' : categoryId === '' }" to="/">Totes</RouterLink>
      </div>
      <div class="item text-center pt-1 pb-3 me-md-3" v-for="category in categories">
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
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  text-decoration: none;

  border-radius: 25px;
  letter-spacing: 1px;
  font-family: 'Space Grotesk',Helvetica,Arial,Lucida,sans-serif !important;
  font-weight: bold !important;
  padding: 0.5rem 2em;
  display: inline-block;
  text-transform: uppercase;

  &.active{
    background-color: #6D5EF7;
    border-color: #6D5EF7;
  }
}

@media screen and (max-width: 1024px){
  .item{
    width: 100%;

    .category{
      width: 100%;
    }
  }
}

</style>
