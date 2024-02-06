<script setup lang="ts">
import { ref, watch } from "vue";
import { Api } from "@/service/api/index";
import { useRoute } from "vue-router";

const props = defineProps({
  category: {
    type: String,
    default: "",
  },
});

const route = useRoute();
const categoryId = ref("");
categoryId.value = route.params.categoryId as string;

const jobs = ref([] as any[]);

const fetchJobs = async () => {
  if (categoryId.value) {
    jobs.value = (await Api.jobs.listCategory(categoryId.value)).data.data;
  } else {
    jobs.value = (await Api.jobs.list()).data.data;
  }
};

watch(
  () => route.params.categoryId,
  async (newValue) => {
    categoryId.value = route.params.categoryId as string;
    fetchJobs();
  }
);

fetchJobs();

const apiBase = import.meta.env.VITE_API_BASE_URL;
</script>

<template>
  <div class="jobs-list">
    <div class="row">
      <div class="col-12 col-md-4 mb-4" v-for="job in jobs">
        <div
          class="picture-wrapper"
          :class="class"
          v-if="job.attributes.image && job.attributes.image.data"
        >
          <RouterLink class="z" :to="'/id/' + job.id">
            <img
              :alt="job.attributes.image.data[0].attributes.alternativeText"
              :src="apiBase + job.attributes.image.data[0].attributes.url"
            />
          </RouterLink>
        </div>
        <div
          class="picture-wrapper"
          :class="class"
          v-else-if="
            job.attributes.job_categories &&
            job.attributes.job_categories.data &&
            job.attributes.job_categories.data.length
          "
        >
          <RouterLink class="z" :to="'/id/' + job.id">
            <img
              alt=""
              :src="
                apiBase +
                job.attributes.job_categories.data[0].attributes.image.data[0]
                  .attributes.url
              "
            />
          </RouterLink>
        </div>
        <div v-else></div>

        <h3 class="mt-2 mb-3">
          <RouterLink class="text" :to="'/id/' + job.id">
            {{ job.attributes.name }}
          </RouterLink>
        </h3>
        <div class="mt-2 mb-3">
          <RouterLink class="button" :to="'/id/' + job.id">+ INFO</RouterLink>
        </div>
        <div class="mb-4">
          <span
            v-if="job.attributes.job_type && job.attributes.job_type.data"
            >{{ job.attributes.job_type.data.attributes.name }}</span
          >

          <span
            v-if="job.attributes.job_entity && job.attributes.job_entity.data"
          >
            a {{ job.attributes.job_entity.data.attributes.name }}</span
          >
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
.text {
  text-decoration: none;
  color: #000;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
