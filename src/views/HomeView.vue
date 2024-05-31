<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import JobsList from "../components/JobsList.vue";
import CategoriesList from "../components/CategoriesList.vue";
import TheHeader from "../components/TheHeader.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryId = ref("");
const typeId = ref("treball");
categoryId.value = route.params.categoryId as string;
if (route.params.typeId) {
  typeId.value = route.params.typeId as string;
}

watch(
  () => route.params.categoryId,
  async (newValue) => {
    categoryId.value = route.params.categoryId as string;
  }
);
watch(
  () => route.params.typeId,
  async (newValue) => {
    typeId.value = route.params.typeId as string;
  }
);

</script>

<template>
  <TheHeader :typeId="typeId" />

  <main :class="`type-${typeId}`">
    <div class="container">
      <div class="taulell d-flex">
        <svg
          class="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="48"
          viewBox="0 0 27 48"
          fill="none"
        >
          <path
            d="M18.4105 2C14.2641 3.02888 10.8176 4.30415 7.82485 7.43444C5.26966 10.1071 3.06842 13.6781 2.31935 17.3443C1.3058 22.3049 2.80018 27.2783 5.45493 31.4591C9.29888 37.5128 15.9309 40.3843 22.3482 42.7214"
            stroke="#ACFFD1"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M20.1607 30.328C20.3029 32.8447 20.8713 35.7794 21.8379 38.1231C22.366 39.4036 23.1471 40.5345 23.8553 41.7133C24.1073 42.1327 24.6896 43.1137 24.4752 43.6559C24.3429 43.9906 22.7377 44.0194 22.5185 44.0494C20.7692 44.2885 19.0155 44.4663 17.2682 44.7256C14.8243 45.0882 12.2773 45.2133 9.87891 45.8199"
            stroke="#ACFFD1"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <div>Troba el teu projecte; Transforma i transforma't!</div>
      </div>
    </div>

    <CategoriesList :category-id="categoryId" :typeId="typeId" />
    <div class="container">
      <TheWelcome />
      <JobsList />
    </div>
  </main>
</template>
<style scoped>
.taulell {
  max-width: 35%;
  margin-top: 5rem;

  color: var(--verd-clar, #acffd1);
  font-family: "Juniper Bay";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 100% */
  text-transform: uppercase;
  margin-left: 5%;
}
.type-voluntariat .taulell {
  color: var(--lila-fluix, #c2bcfd);
}
.arrow {
  width: 70px;
  margin-right: 1rem;
  margin-top: 5rem;
}
.type-voluntariat .arrow path {
  stroke: var(--lila-fluix, #c2bcfd);
}
</style>
