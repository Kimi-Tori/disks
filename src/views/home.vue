<template>
  <div class="home">
    <home-filter class="home__filter" />
    <home-intro class="home__intro" />
    <home-disks class="home__disks" />
    <home-plus class="home__plus" />
    <home-table class="home__table" />
    <home-advantages class="home__advantages" />
    <home-form class="home__form" />
  </div>
</template>

<script>
import HomeFilter from "@/components/home/home-filter.vue";
import HomeIntro from "@/components/home/home-intro.vue";
import HomeDisks from "@/components/home/home-disks.vue";
import HomePlus from "@/components/home/home-plus.vue";
import HomeTable from "@/components/home/home-table.vue";
import HomeAdvantages from "@/components/home/home-advantages.vue";
import HomeForm from "@/components/home/home-form.vue";

export default {
  name: "home",
  components: {
    HomeFilter,
    HomeIntro,
    HomeDisks,
    HomePlus,
    HomeTable,
    HomeAdvantages,
    HomeForm,
  },
};
</script>

<style lang="scss">
.home {
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

  &__table {
    margin-top: 205px;
  }

  &__advantages {
    margin-top: 200px;
  }

  &__form {
    margin-top: 200px;
  }
}
</style>
