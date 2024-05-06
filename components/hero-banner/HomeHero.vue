<template>
  <section class="slider__area pt-100 slider__overlay-2 slider__overlay-2-2 p-relative z-index-1">
    <div class="slider__shape-2">
      <img class="slider__shape-2-1" src="~/assets/img/shape/shape-3.svg" alt="">
      <img class="slider__shape-2-2" src="~/assets/img/shape/shape-1.svg" alt="">
      <img class="slider__shape-2-3" src="~/assets/img/shape/shape-2.svg" alt="">
    </div>
    <div class="slider__portfolio-btn">
      <nuxt-link href="#portfolio" class="slider-portfolio-btn">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path
            d="M3.5 2.25001C3.5 1.28351 2.7165 0.500001 1.75 0.500001C0.783502 0.500001 0 1.28351 0 2.25001C0 3.2165 0.783502 4 1.75 4C2.7165 4 3.5 3.2165 3.5 2.25001Z"
            fill="currentColor" />
          <path
            d="M3.5 12.25C3.5 11.2835 2.7165 10.5 1.75 10.5C0.783502 10.5 0 11.2835 0 12.25C0 13.2165 0.783502 14 1.75 14C2.7165 14 3.5 13.2165 3.5 12.25Z"
            fill="currentColor" />
          <path
            d="M13.5 2.25001C13.5 1.28351 12.7165 0.500002 11.75 0.500002C10.7835 0.500002 10 1.28351 10 2.25001C10 3.2165 10.7835 4 11.75 4C12.7165 4 13.5 3.2165 13.5 2.25001Z"
            fill="currentColor" />
          <path
            d="M13.5 12.25C13.5 11.2835 12.7165 10.5 11.75 10.5C10.7835 10.5 10 11.2835 10 12.25C10 13.2165 10.7835 14 11.75 14C12.7165 14 13.5 13.2165 13.5 12.25Z"
            fill="currentColor" />
        </svg>
        All Projects
      </nuxt-link>
    </div>
    <div class="slider__mouse-scroll smooth d-flex align-items-center">
      <a href="#about" class="mouse-scroll-icon"></a>
      <p><a href="#about">Scroll Down</a></p>
    </div>

    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-7 col-lg-6 col-md-7">
            <div class="slider__content-9 mb-0">
              <span class="slider__title-pre-9">Hello {{ store.name }}, I'm Mohamed Camara 👋</span>
              <h3 class="slider__title-9">
                Front Developer.<br>
                Entrepreneur.<br>
                VueJS Expert.
              </h3>
              <p>
                At 14, I built a website that drew millions — Today, I'm a Front-end Developer and entrepreneur who use Vue.js to create elegant, robust web applications.
              </p>

              <div class="slider__btn-9 mb-40">
                <nuxt-link href="#about" class="tp-btn-5 tp-link-btn-3">
                  More about me
                  <span>
                    <i class="fa-regular fa-arrow-down"></i>
                  </span>
                </nuxt-link>
              </div>

              <div class="slider__social-9 d-flex flex-wrap align-items-center">
                <span v-if="store.name == ''">Join my Network:</span>
                <span v-else>Let's connect {{ store.name }} ! 👉</span>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/mohamed-camara/" target="_blank">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/camara.off/" target="_blank">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div class="col-xxl-5 col-xl-5 col-lg-6">
          <div class="slider__thumb-wrapper-2 pt-20 ml-40 ">
            <div class="slider__thumb-2 m-img text-center" data-sal="slide-up" data-sal-delay="180" data-sal-duration="1200">
              <img src="~/assets/img/slider/slider-1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';
import { useUtilsStore } from '~~/store/utils';

export default {
  mixins:[SalScrollAnimationMixin],

  setup() {
    const store = useUtilsStore();
    return {store}
  }
}
</script>

<style lang="scss">
.slider__thumb-wrapper-2 {
  background-color: #00bcd4;
  background-image: linear-gradient(55deg, #00bcd4 20.83%, #00b6ce 0, #00b6ce 50%, #00bcd4 0, #00bcd4 70.83%, #00b6ce 0, #00b6ce);
  background-size: 73.25px 104.61px;
  animation: stripes 10s linear infinite;
}
@keyframes stripes {
    0% {
        background-position: 0 0
    }

    to {
        background-position: 73.25px 0
    }
}
</style>