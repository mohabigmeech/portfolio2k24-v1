<template>
  <section id="about" class="about__area about__space-145 grey-bg-7">
    <div class="about__inner-9" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-10 col-xl-10 col-lg-11 col-md-10">
            <div class="about__wrapper-9">
              <span class="about-subtitle">About me</span>
              <h3 class="about-title">
                From <span>Bondy</span> — just like Mbappé <img src="~/assets/img/about/about-mbappe.png" alt="">, Front End specialist for <span>{{myExp}}+ years</span> and ex-founder of a <span>startup</span> that grew significantly.
              </h3>

              <p>Over the past {{myExp}} years, I've developed web applications for startups, large companies, and a digital agency, <strong>mostly using Vue.js</strong>.<br><br>
                Alongside founding my startup, appearing on <strong>french Shark Tank</strong>, and <strong>teaching AI</strong> to students, each chapter has not only <strong>enhanced my skills</strong> but also fueled my passion for tech!</p>

              <div class="about__btn-9">
                <nuxt-link href="#entrepreneur" class="tp-btn-5 tp-btn-5-white">
                  Discover my journey
                  <span>
                    <i class="fa-regular fa-arrow-down"></i>
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  computed: {
    myExp() {
      const start = new Date(2016, 3, 1);
      const today = new Date();
      let diff = (today.getTime() - start.getTime()) / 1000;
      diff /= (60 * 60 * 24);
      return Math.abs(Math.round(diff / 365.25));
    }
  }
}
</script>

