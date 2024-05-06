<template>
  <div>
    <header-one />
    <PortfolioContent :project="project"/>
    <portfolio-navigation :projects="portfolioData"/>
    <footer-one />
    <back-to-top />
  </div>
</template>

<script>
import portfolioData from "~~/mixins/portfolioData";
import PortfolioNavigation from "~~/components/portfolio-details/PortfolioNavigation.vue";
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import PortfolioContent from '~~/components/portfolio-details/PortfolioContent.vue';
import FooterOne from '~~/layouts/footers/FooterOne.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, PortfolioContent, FooterOne, PortfolioNavigation, BackToTop},
  mixins: [portfolioData],
  data() {
    return {
      project: {},
    };
  },
  setup() {
    useHead({
      title: `CAMARA© Work - Projects`,
    });
  },
  created() {
    const route = useRoute();
    this.project = portfolioData
      .data()
      .portfolioData.find((p) => p.id == route.params.id);
  },
};
</script>
