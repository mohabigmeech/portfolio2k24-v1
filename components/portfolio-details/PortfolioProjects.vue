<template>
  <section class="portfolio__area pt-100 pb-60">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <div class="portfolio__details-img-list">
            <div class="portfolio__details-img-list-box mb-10" v-for="(img, i) in project.relatedImages" :key="i">
              <img v-if="img.img" :src="img.img" :alt="`${project.title} - Image ${i}`">
              <video v-if="img.video"
                  loop
                  muted
                  autoplay
                  Playsinline 
                  preload="auto">
                  <source :src="img.video" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="portfolio__details-info-wrapper">
            <div class="portfolio__details-info-content">
              <h3 class="portfolio__details-info-box-title">Project Details</h3>
              <p v-html="project.details"></p>
            </div>
            <div class="portfolio__details-meta flex-wrap mb-40">
              <div class="portfolio__details-meta-item d-flex align-items-start" v-for="info in project.informations" :key="info.title">
                <div class="portfolio__details-meta-icon">
                  <span>
                    <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.36364 13.7273C10.8782 13.7273 13.7273 10.8782 13.7273 7.36364C13.7273 3.8491 10.8782 1 7.36364 1C3.8491 1 1 3.8491 1 7.36364C1 10.8782 3.8491 13.7273 7.36364 13.7273Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path opacity="0.4" d="M3.92031 12.7182L2.82031 21L7.36577 18.2727L11.9112 21L10.8112 12.7091"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <div class="portfolio__details-meta-content">
                  <h5>{{info.title}}:</h5>
                  <span v-html="info.content"></span>
                </div>
              </div>
            </div>
            <div class="portfolio__details-info-btn">
              <nuxt-link :href="project.website" target="_blank" class="tp-btn w-100">Visit Website</nuxt-link>
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
    project: {
      type: Object,
      default: {},
      required: true,
    },
  }
}
</script>
