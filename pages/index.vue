<template>
  <loading-animation v-if="isLoading"/>
  <layout>
    <HomeHero/>
    <HomeAbout/>
    <BrandsList/>
    <HomeAboutVideo/>
    <HomePortfolio/>
    <HomeSkills/>
    <HomeTestimonial/>
    <ContactOne/>
  </layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUtilsStore } from "~~/store/utils";
import { consoleBeautify } from "~/utils/utils";
import LoadingAnimation from '~/components/loaders/LoadingAnimation.vue';
import Layout from '~/layouts/Layout.vue';
import HomeHero from '~/components/hero-banner/HomeHero.vue';
import HomeAbout from '~/components/abouts/HomeAbout.vue';
import BrandsList from '~/components/brands/BrandsList.vue';
import HomeAboutVideo from '~/components/abouts/HomeAboutVideo.vue';
import HomePortfolio from '~/components/portfolios/HomePortfolio.vue';
import HomeSkills from "~/components/skills/HomeSkills.vue";
import HomeTestimonial from "~/components/testimonials/HomeTestimonial.vue";
import ContactOne from "~/components/contact/ContactOne.vue";


const store = useUtilsStore();
const route = useRoute();
const isLoading = ref(true);

useHead({
  title: "CAMARA© Work | Home ",
});

function saveUrlName() {
  const urlName = route.query.name;
  const storageName = localStorage.getItem("mcamara_name");

  // First time on URL
  if(storageName == undefined && urlName != undefined) {
    store.setName(urlName);
    localStorage.setItem("mcamara_name", urlName);
  }

  // Edit by URL
  if(urlName != undefined) {
    store.setName(urlName);
    localStorage.setItem("mcamara_name", urlName);
  }

  // Sync Storage & Store
  if(storageName != undefined && urlName == undefined) {
    store.setName(storageName);
  }
}

onMounted(() => {
  saveUrlName();
  consoleBeautify();
  setTimeout(() => {
    isLoading.value = false;
  }, 3200)
  
})

</script>
