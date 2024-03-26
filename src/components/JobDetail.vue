<script setup lang="ts">
import { ref, watch } from "vue";
import { Api } from "@/service/api/index";
import { useRoute } from "vue-router";
import VueMarkdown from "vue-markdown-render";

const props = defineProps({
  category: {
    type: String,
    default: "",
  },
});

const route = useRoute();
const jobId = ref("");
jobId.value = route.params.jobId as string;

const job = ref({} as any);

const fetchJob = async () => {
  job.value = (await Api.jobs.get(jobId.value)).data.data;
};

fetchJob();

const apiBase = import.meta.env.VITE_API_BASE_URL;
</script>

<template>
  <div class="job mt-4" v-if="job && job.attributes">
    <div class="row mb-4 mt-4">
      <!-- <div class="col-12 col-md-4 mt-4">
        
        <div
          class="picture-wrapper"
          :class="class"
          v-if="job.attributes.image && job.attributes.image.data"
        >
          <img
            :alt="job.attributes.image.data[0].attributes.alternativeText"
            :src="apiBase + job.attributes.image.data[0].attributes.url"
          />
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
          <img
            alt=""
            :src="
              apiBase +
              job.attributes.job_categories.data[0].attributes.image.data[0]
                .attributes.url
            "
          />
        </div>

      </div> -->
      <div class="z mt-4">
        <h1 class="mb-4 mt-4">{{ job.attributes.name }}</h1>
        <div class="mb-4 text">
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
    </div>

    <h3 v-if="job.attributes.description">Descripció</h3>
    <div class="body-text">
      <vue-markdown
        v-if="job.attributes.description"
        :source="job.attributes.description"
      ></vue-markdown>
      <h3 v-if="job.attributes.requirements" class="mt-4">Requisits</h3>
      <vue-markdown
        v-if="job.attributes.requirements"
        :source="job.attributes.requirements"
      ></vue-markdown>
      <h3 v-if="job.attributes.apply" class="mt-4">Com apuntar-se</h3>
      <vue-markdown
        v-if="job.attributes.requirements"
        :source="job.attributes.apply"
      ></vue-markdown>
      <div
        class="mt-40 mb-40"
        v-if="job.attributes.c2aText && job.attributes.c2aLink"
      >
        <a class="button mt-4" target="_blank" :href="job.attributes.c2aLink">{{
          job.attributes.c2aText
        }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  /* font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px; */

  color: var(--blanc, #fff);
  font-family: "Space Grotesk";
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 127.273% */
  letter-spacing: 0.88px;
  text-transform: uppercase;
  border-bottom: 2px solid #6D5EF7;
  display: inline-block;
}

h3 {
  color: var(--blanc, #fff);
  font-family: "Space Grotesk";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 127.273% */
  letter-spacing: 0.88px;
  text-transform: uppercase;
  border-bottom: 2px solid #6D5EF7;
  display: inline-block;
}
.text{
  color: var(--blanc, #FFF);
font-family: "Space Grotesk";
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 20px;
}

.body-text {
  color: var(--blanc, #fff);
  font-family: "Space Grotesk";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
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
.picture-wrapper img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.mt-40 {
  margin-top: 4rem;
}
.mb-40 {
  margin-bottom: 4rem;
}
</style>
