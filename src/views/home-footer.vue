<template>
  <div class="home-footer">
    <home-filter class="home-footer__filter" />
    <home-intro class="home-footer__intro" />
    <home-footer-disks class="home-footer__disks" />
    <home-footer-plus class="home-footer__plus" />
    <home-footer-baner class="home-footer__baner" />
    <home-footer-materials class="home-footer__materials" />
  </div>
</template>

<script>
import HomeFilter from "@/components/home/home-filter.vue";
import HomeIntro from "@/components/home/home-intro.vue";
import HomeFooterDisks from "@/components/home-footer/home-footer-disks.vue";
import HomeFooterPlus from "@/components/home-footer/home-footer-plus.vue";
import HomeFooterBaner from "@/components/home-footer/home-footer-baner.vue";
import HomeFooterMaterials from "@/components/home-footer/home-footer-materials.vue";

export default {
  name: "home",
  components: {
    HomeFilter,
    HomeIntro,
    HomeFooterDisks,
    HomeFooterPlus,
    HomeFooterBaner,
    HomeFooterMaterials,
  },
};
</script>

<style lang="scss">
.home-footer {
  background-color: $dark;

  &__filter {
    margin-top: 60px;
  }

  &__intro {
    position: relative;
    margin-top: 64px;
  }

  &__disks {
    position: relative;
    margin-top: 340px;
  }

  &__plus {
    position: relative;
    margin-top: 300px;
  }

  &__baner {
    margin-top: 165px;
  }

  &__materials {
    margin-top: 200px;
  }
}
</style>
