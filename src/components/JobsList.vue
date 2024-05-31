<script setup lang="ts">
import { ref, watch } from "vue";
import { Api } from "@/service/api/index";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryId = ref("");
categoryId.value = route.params.categoryId as string;

const typeId = ref("treball");
typeId.value = route.params.typeId as string;

const jobs = ref([] as any[]);

const fetchJobs = async () => {
  if (categoryId.value) {
    jobs.value = (await Api.jobs.listCategory(typeId.value, categoryId.value)).data.data;
  } else {
    jobs.value = (await Api.jobs.list(typeId.value)).data.data;
  }
};

watch(
  () => route.params.categoryId,
  async (newValue) => {
    categoryId.value = route.params.categoryId as string;
    fetchJobs();
  }
);
watch(
  () => route.params.typeId,
  async (newValue) => {
    typeId.value = route.params.typeId as string;
    fetchJobs();
  }
);

fetchJobs();

const apiBase = import.meta.env.VITE_API_BASE_URL;
</script>

<template>
  <div class="jobs-list mt-5 pt-3">
    <div class="row">
      <div class="col-12 col-md-4 mb-4" v-for="job in jobs">
        <h3 class="mt-2 mb-3">
          <RouterLink class="text" :to="'/' + typeId + '/id/' + job.id">
            {{ job.attributes.name }}
            <span
              v-if="job.attributes.job_entity && job.attributes.job_entity.data"
            >
              - {{ job.attributes.job_entity.data.attributes.name }}</span
            >
          </RouterLink>
        </h3>
        <div class="mb-4 body-text">
          <span
            v-if="
              job.attributes.description &&
              job.attributes.description.length > 100
            "
            >{{ job.attributes.description.substring(0, 100) }}...</span
          >
          <span
            v-if="
              job.attributes.description &&
              job.attributes.description.length <= 100
            "
            >{{ job.attributes.description }}</span
          >
        </div>
        <div class="mt-2 mb-3">
          <RouterLink class="button" :to="'/' + typeId + '/id/' + job.id">+ INFO</RouterLink>
        </div>
      </div>
      <div v-if="!jobs.length">
        <h3>No hi ha ofertes</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Space Grotesk";
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.picture-wrapper img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.button {
  background-color: #febb86;
  color: #000;
  text-decoration: none;

  border-radius: 25px;
  letter-spacing: 1px;
  font-family: "Space Grotesk", Helvetica, Arial, Lucida, sans-serif !important;
  font-weight: 700 !important;
  padding: 0.5rem 2em;

  &.active {
    background-color: #fff;
    color: #000;
  }
}
.text,
.text span {
  color: var(--blanc, #fff);
  font-family: "Space Grotesk";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 127.273% */
  letter-spacing: 0.88px;
  text-decoration-line: underline;
  text-transform: uppercase;
}

.body-text {
  color: var(--blanc, #fff);
  font-family: "Space Grotesk";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
