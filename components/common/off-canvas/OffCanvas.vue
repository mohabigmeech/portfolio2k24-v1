<template>
  <div :class="`offcanvas__area offcanvas__area-2 ${isOffCanvasOpen?'offcanvas-opened':''}`">
      <div class="offcanvas__wrapper">
        <div class="offcanvas__close">
            <button @click="closeOffcanvas" class="offcanvas__close-btn offcanvas__close-btn-2 offcanvas-close-btn">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
        </div>
        <div class="offcanvas__content">
            <div class="offcanvas__top mb-60 d-flex justify-content-between align-items-center">
              <div class="offcanvas__logo logo">
                  <nuxt-link href="/">
                  <img width="120" src="~/assets/img/logo/logo.svg" alt="logo">
                  </nuxt-link>
              </div>
            </div>
            <div class="offcanvas__menu offcanvas__menu-ff-poppins">
              <nav>
                  <ul>
                    <li><nuxt-link @click="closeOffcanvas" href="/">Home</nuxt-link></li>
                    <li><nuxt-link @click="closeOffcanvas" href="/#about">About</nuxt-link></li>
                    <li><nuxt-link @click="closeOffcanvas" href="/#entrepreneur">Entrepreneurship</nuxt-link></li>
                    <li><nuxt-link @click="closeOffcanvas" href="/#portfolio">Portfolio</nuxt-link></li>
                    <li><nuxt-link @click="closeOffcanvas" href="/#skills">Skills</nuxt-link></li>
                    <li><nuxt-link @click="closeOffcanvas" href="/#reviews">Testimonials</nuxt-link></li>
                    <li><nuxt-link @click="closeOffcanvas" href="/#contact">Contact</nuxt-link></li>
                  </ul>
              </nav>
            </div>
            <div class="offcanvas__text">
              <p>I'm a <strong>Front-end Developer</strong> with over <strong>{{myExp}} years</strong>' experience, specializing in <strong>Vue.js</strong> and combining my technical skills with an <strong>entrepreneurial</strong> vision to create impactful web applications.</p>

              <div class="offcanvas__signature mb-40">
                  <img src="~/assets/img/shape/offcanvas-signature2.jpeg" alt="signature">
              </div>
            </div>
            
            <div class="offcanvas__link-btn mb-25">
              <nuxt-link @click="closeOffcanvas" href="/#contact" class="tp-link-btn-circle">
                  <span>
                    <i class="fa-regular fa-arrow-right"></i>
                    <i class="fa-regular fa-arrow-right"></i>
                  </span>
                  Work <br> with me
              </nuxt-link>
            </div>
            <div class="offcanvas__social">
              <h3 class="offcanvas__social-title">Join my Network :</h3>
              <social/>
            </div>
        </div>
      </div>
  </div>
  <!-- body overlay start -->
  <div @click="closeOffcanvas" :class="`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`"></div>
  <!-- body overlay end -->
</template>

<script>
import Social from '~~/components/social/Social.vue';

  export default {
  components: { Social },
  data(){
    return {
      isOffCanvasOpen:false,
    }
  },
  computed: {
    myExp() {
      const start = new Date(2016, 3, 1);
      const today = new Date();
      let diff = (today.getTime() - start.getTime()) / 1000;
      diff /= (60 * 60 * 24);
      return Math.abs(Math.round(diff / 365.25));
    }
  },
  methods:{
    openOffcanvas(){
      this.isOffCanvasOpen = true
    },
    closeOffcanvas(){
      this.isOffCanvasOpen = false
    }
  },
  }
</script>
