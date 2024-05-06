<template>
  <Swiper
    class="brand__slider-active swiper-container"
    :slidesPerView="5"
    :spaceBetween="0"
    :loop="true"
    :breakpoints="{
      '1200': {
        slidesPerView: 5,
      },
      '992': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 3,
      },
      '576': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 2,
      },
    }"
  >
    <SwiperSlide class="brand__thumb">
      <img src="~/assets/img/brand/brand-stationf-w.png" alt="" />
    </SwiperSlide>
    <SwiperSlide class="brand__thumb">
      <img src="~/assets/img/brand/brand-frenchtechnyc-w.png" alt="" />
    </SwiperSlide>
    <SwiperSlide class="brand__thumb">
      <img src="~/assets/img/brand/brand-linkedin-w.png" alt="" />
    </SwiperSlide>
    <SwiperSlide class="brand__thumb">
      <img src="~/assets/img/brand/brand-determines-w.png" alt="" />
    </SwiperSlide>
    <SwiperSlide class="brand__thumb">
      <img src="~/assets/img/brand/brand-zadigvoltaire-w.png" alt="" />
    </SwiperSlide>
    <SwiperSlide class="brand__thumb">
      <img src="~/assets/img/brand/brand-raja-w.png" alt="" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
