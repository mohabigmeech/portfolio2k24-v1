<template>
  <section class="portfolio__navigation-area portfolio__more-border d-none d-md-block">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-5 col-md-5">
          <div class="portfolio__more-left d-flex align-items-center">
            <div class="portfolio__more-icon">
              <nuxt-link :href="`/portfolio-details-list/${previousProject.id}`">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 12.9718L2.06061 8.04401C1.47727 7.46205 1.47727 6.50975 2.06061 5.92778L7 1"
                    stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </nuxt-link>
            </div>
            <div class="portfolio__more-content">
              <p>Previous Work</p>
              <h4>
                <nuxt-link :href="`/portfolio-details-list/${previousProject.id}`">{{previousProject.title}}</nuxt-link>
              </h4>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2">
          <div class="portfolio__more-menu text-center">
            <nuxt-link href="/#portfolio">
              <span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.6673 4.66662C12.9559 4.66662 14.0006 3.62196 14.0006 2.33331C14.0006 1.04466 12.9559 0 11.6673 0C10.3786 0 9.33398 1.04466 9.33398 2.33331C9.33398 3.62196 10.3786 4.66662 11.6673 4.66662Z"
                    fill="currentColor" />
                  <path
                    d="M2.33331 4.66662C3.62196 4.66662 4.66662 3.62196 4.66662 2.33331C4.66662 1.04466 3.62196 0 2.33331 0C1.04466 0 0 1.04466 0 2.33331C0 3.62196 1.04466 4.66662 2.33331 4.66662Z"
                    fill="currentColor" />
                  <path
                    d="M11.6673 13.9996C12.9559 13.9996 14.0006 12.955 14.0006 11.6663C14.0006 10.3777 12.9559 9.33301 11.6673 9.33301C10.3786 9.33301 9.33398 10.3777 9.33398 11.6663C9.33398 12.955 10.3786 13.9996 11.6673 13.9996Z"
                    fill="currentColor" />
                  <path
                    d="M2.33331 13.9996C3.62196 13.9996 4.66662 12.955 4.66662 11.6663C4.66662 10.3777 3.62196 9.33301 2.33331 9.33301C1.04466 9.33301 0 10.3777 0 11.6663C0 12.955 1.04466 13.9996 2.33331 13.9996Z"
                    fill="currentColor" />
                </svg>
              </span>
            </nuxt-link>
          </div>
        </div>
        <div class="col-xl-5 col-lg-5 col-md-5">
          <div class="portfolio__more-right d-flex align-items-center justify-content-end">
            <div class="portfolio__more-content">
              <p>Next Work</p>
              <h4>
                <nuxt-link :href="`/portfolio-details-list/${nextProject.id}`">{{nextProject.title}}</nuxt-link>
              </h4>
            </div>
            <div class="portfolio__more-icon">
              <nuxt-link :href="`/portfolio-details-list/${nextProject.id}`">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12.9718L5.93939 8.04401C6.52273 7.46205 6.52273 6.50975 5.93939 5.92778L1 1"
                    stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  computed: {
    otherProjects() {
      const route = useRoute();
      const id = route.params.id;
      return this.projects.filter(prj => prj.id != id);;
    },
    previousProject() {
      return this.otherProjects[0]
    },
    nextProject() {
      return this.otherProjects[1]
    }
  }
}
</script>
