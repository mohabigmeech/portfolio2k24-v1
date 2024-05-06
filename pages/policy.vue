<template>
  <div>
    <header-one/>
    <section-title title="Privacy Policy" subtitle="Your privacy matters to us. At camara.work, we are committed to safeguarding your personal information. We respect your privacy and strive to protect any information we may collect from you through our website, camara.work, and other platforms we own and manage."/>
      <policy-area/>
    <footer-one/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SectionTitle from '~~/components/policy-terms/SectionTitle.vue';
import PolicyArea from '~~/components/policy-terms/PolicyArea.vue';
import FooterOne from '~~/layouts/footers/FooterOne.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    SectionTitle,
    PolicyArea,
    FooterOne,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Policy | CAMARA© Work",
    });
  },
};
</script>
