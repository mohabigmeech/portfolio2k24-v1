<template>
  <div>
    <header-one />
    <main>
      <slot></slot>
    </main>
    <footer-one/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "./headers/HeaderOne.vue";
import FooterOne from './footers/FooterOne.vue';
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    FooterOne,
    BackToTop,
  },
};
</script>
