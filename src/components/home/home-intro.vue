<template>
  <section class="home-intro">
    <v-container>
      <div class="home-intro__container">
        <h1 class="color-white h1 text-uppercase">
          <span class="color-red">Brannor –</span> <br />продукт <br />новой
          эпохи
        </h1>

        <div class="home-intro__container-text ml-auto mt-10">
          <p class="color-white text-uppercase size-parag">
            Лучшие фрикционные материалы для тормозных колодок и дисков,
            основанные на самых передовых стандартах современной автомобильной
            промышленности
          </p>
          <v-btn class="home-intro__container-text__button mt-8"
            >Узнать больше о компании</v-btn
          >
        </div>
      </div>
      <img src="@/assets/home/home-intro.png" class="home-intro__img" />
    </v-container>
  </section>
</template>

<script>
export default {
  name: "home-intro",
};
</script>

<style lang="scss">
.home-intro {
  &__container {
    position: relative;
    z-index: 1;
    max-width: 640px;

    &-text {
      max-width: 520px;

      &__button {
        width: 301px !important;
        height: 38px !important;
        border-radius: 100px !important;
        background-color: transparent !important;
        border: 1px solid $red;
        color: $red;
        transition: 0.2s linear;

        &:hover {
          background-color: $red !important;
          color: $white;
        }
      }
    }
  }

  &__img {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
