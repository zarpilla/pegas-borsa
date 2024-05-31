<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps({
    typeId: {
        type: String,
        required: true
    }
});

</script>


<template>
      <div class="container mt-4">
    <img src="@/assets/borsa.svg" v-if="typeId == '' || typeId === 'treball'" class="mt-5 title" alt="" />
    <img src="@/assets/voluntariat.svg" v-else class="mt-5 title" alt="" />
  </div>
</template>