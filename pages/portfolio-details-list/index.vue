<template>
  <div>
    <header-one />
    <footer-one />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import FooterOne from '~~/layouts/footers/FooterOne.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, FooterOne, BackToTop},
  setup() {
    useHead({
      title: "CAMARA© Work - Projects",
    });
  },
};
</script>
