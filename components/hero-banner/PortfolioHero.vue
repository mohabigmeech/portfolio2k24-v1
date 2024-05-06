<template>
  <section
    class="breadcrumb__area breadcrumb__style-3 breadcrumb__spacing-2 include-bg pt-200 pb-235 grey-bg-4"
    :style="{ backgroundImage: `url(${project.heroImage})` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxl-8">
          <div class="breadcrumb__content p-relative z-index-1">
            <h3 class="breadcrumb__title">
              {{project.title}}
            </h3>
            <p v-html="project.slug"></p>
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
};
</script>
