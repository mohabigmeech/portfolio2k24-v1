<template>
  <div>
    <header-one />
    <section-title
      title="Terms and Conditions"
      subtitle="The capitalized terms used herein have specific meanings assigned under certain circumstances. These definitions remain consistent regardless of whether they are expressed in singular or plural form."
    />
    <terms-area />
    <footer-one />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SectionTitle from "~~/components/policy-terms/SectionTitle.vue";
import TermsArea from '~~/components/policy-terms/TermsArea.vue';
import FooterOne from "~~/layouts/footers/FooterOne.vue";
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    SectionTitle,
    TermsArea,
    FooterOne,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Terms | CAMARA© Work",
    });
  },
};
</script>
