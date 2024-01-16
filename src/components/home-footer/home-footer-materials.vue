<template>
  <section
    class="home-footer-materials d-flex flex-column align-center justify-center"
  >
    <v-container class="home-footer-materials__container ml-auto mr-0">
      <span class="size-big-span text-uppercase color-red"
        >ваши ощущения на<br />дороге в надежных руках</span
      >
      <div class="home-footer-materials__container-text">
        <h3 class="h4-dop text-uppercase color-white">Материалы</h3>
        <p class="h4-dop color-white mt-10">
          Керамический фрикционный материал,<br />обеспечивающий высокую
          динамику<br />
          начального торможения и длительные<br />эксплуатационные
          характеристики
        </p>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "home-footer-materials",
};
</script>

<style lang="scss">
.home-footer-materials {
  background-image: url("@/assets/icons/home-footer-materials.svg");
  background-position: center center;
  height: 660px;

  &__container {
    max-width: 50% !important;

    &-text {
      margin-top: 100px;
    }
  }
}
</style>
