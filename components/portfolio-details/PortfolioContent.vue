<template>
  <PortfolioHero :project="project"/>
  <PortfolioProjects :project="project"/>
  <home-testimonial class="pt-0"/>
</template>

<script>
import PortfolioProjects from "./PortfolioProjects.vue";
import PortfolioNavigation from "./PortfolioNavigation.vue";
import PortfolioHero from "~~/components/hero-banner/PortfolioHero.vue";
import HomeTestimonial from "~~/components/testimonials/HomeTestimonial.vue";
import ContactOne from "~/components/contact/ContactOne.vue";

export default {
  components: {
    PortfolioHero,
    PortfolioProjects,
    PortfolioNavigation,
    HomeTestimonial,
    ContactOne
  },
  props: {
    project: {
      type: Object,
      default: {},
      required: true,
    },
  }
};
</script>
