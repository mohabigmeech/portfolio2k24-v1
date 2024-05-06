<template>
  <a
    v-for="(item, i) in social_links"
    :key="i"
    :href="item.link"
    :target="item.target"
  >
    <i :class="item.icon"></i>
  </a>
</template>

<script>
export default {
  data() {
    return {
      social_links: [
        {
          link: "https://www.linkedin.com/in/mohamed-camara/",
          target: "_blank",
          icon: "fa-brands fa-linkedin-in",
          name: "Linkedin",
        },
        {
          link: "https://www.instagram.com/camara.off/",
          target: "_blank",
          icon: "fa-brands fa-instagram",
          name: "Instagram",
        },
      ],
    };
  },
};
</script>
