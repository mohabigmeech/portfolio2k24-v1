<template>
  <section class="skill__area pt-95 grey-bg-12 pb-125" id="skills">
    <div class="container">
      <div class="row">
        <div class="col-xxl-5 col-xl-5 col-lg-5">
          <div class="skill__wrapper-9">
            <div class="section__title-wrapper-9 mb-55">
              <span class="section__title-pre-9">Always getting better</span>
              <h3 class="section__title-9">Skills & <br />Experience</h3>
            </div>
            <div class="skill__item-wrapper-9">
              <div class="row">
                <div
                  v-for="(item, i) in skill_data"
                  :key="i"
                  class="col-xxl-6 col-md-6 col-sm-6 col-6"
                >
                  <div class="skill__item-9">
                    <div class="skill__icon-9">
                      <span>
                        <img :src="item.icon" alt="icon" />
                      </span>
                    </div>
                    <div class="skill__content-9">
                      <h4>
                        {{ item.title }}
                        <span>
                          (<span class="counter">{{ item.num }}</span>
                          {{ item.text }})
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7">
          <career-items style_2="career__style-2" :career_data="career_data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// internal
import skill_1 from "~/assets/img/skill/skill-icon-5.png";
import skill_2 from "~/assets/img/skill/skill-icon-7.png";
import skill_3 from "~/assets/img/skill/skill-icon-6.png";
import skill_4 from "~/assets/img/skill/skill-icon-8.png";
import company_icon_1 from "~/assets/img/skill/company/company-icon-8.png";
import company_icon_2 from "~/assets/img/skill/company/company-icon-10.png";
import company_icon_3 from "~/assets/img/skill/company/company-icon-6.png";
import company_icon_4 from "~/assets/img/skill/company/company-icon-5.png";
import company_icon_5 from "~/assets/img/skill/company/company-icon-9.png";
import company_icon_6 from "~/assets/img/skill/company/company-icon-11.png";
import company_icon_7 from "~/assets/img/skill/company/company-icon-7.png";
import CareerItems from "./CareerItems.vue";

export default {
  components: { CareerItems },
  data() {
    return {
      skill_data: [
        { icon: skill_1, title: "Vue.js", num: "90", text: "%" },
        { icon: skill_2, title: "Javascript", num: "85", text: "%" },
        { icon: skill_3, title: "Typescript", num: "70", text: "%" },
        { icon: skill_4, title: "Nuxt.js", num: "60", text: "%" },
      ],
      career_data: [
        {
          delay: "130",
          icon: company_icon_1,
          title: "Co-Founder & CTO (Vue.js)",
          designation: "Uncle J",
          year: "Jan 2021 - Dec 2023",
          link: "https://uncle-j.com/",
        },
        {
          delay: "150",
          icon: company_icon_2,
          title: "Front-end Developer (Vue.js)",
          designation: "Hager Group",
          year: "Jun 2023 - Dec 2023",
          link: "https://hager.com/uk",
        },
        {
          delay: "170",
          icon: company_icon_3,
          title: "Front-end Developer (Vue.js)",
          designation: "BforCure",
          year: "Mar 2022 - Jul 2022",
          link: "https://bforcure.com/",
        },
        {
          delay: "190",
          icon: company_icon_4,
          title: "Front-end Developer (Vue.js)",
          designation: "Zadig&Voltaire",
          year: "Apr 2021 - Aug 2021",
          link: "https://zadig-et-voltaire.com/us/en/",
        },
        
        {
          delay: "210",
          icon: company_icon_5,
          title: "Front-end Developer (Vue.js)",
          designation: "IDWEAVER",
          year: "Nov 2018 - Oct 2019",
          link: "https://www.idweaver.com/",
        },
        
        {
          delay: "230",
          icon: company_icon_6,
          title: "Front-end Developer (JS)",
          designation: "RAJA",
          year: "Oct 2016 - Sep 2018",
          link: "https://www.rajapack.co.uk/",
        },
        
        {
          delay: "250",
          icon: company_icon_7,
          title: "Front-end Developer (jQuery)",
          designation: "coChange",
          year: "Apr 2016 - Sep 2016",
          link: "",
        },
      ],
    };
  },
};
</script>
