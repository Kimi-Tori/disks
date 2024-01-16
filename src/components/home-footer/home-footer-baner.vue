<template>
  <section
    class="home-footer-baner d-flex flex-column align-center justify-center"
  >
    <v-container>
      <span class="size-big-span text-uppercase color-red">Колодки</span>
      <h2 class="h2 text-uppercase color-white mt-10">
        Колодки Brannor это<br />комфортное и<br />безопасное вождение
      </h2>
      <v-btn class="home-footer-baner__btn mt-12">Подробнее</v-btn>
      <div class="home-footer-baner__row d-flex flex-wrap mt-12">
        <div
          class="home-footer-baner__row-col mt-12"
          v-for="item in items"
          :key="item"
        >
          <svg
            class="mt-2"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10.5261"
              cy="10.5261"
              r="9.02614"
              stroke="white"
              stroke-width="3"
              stroke-dasharray="6 6"
            />
          </svg>
          <p class="color-white">{{ item.title }}</p>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "home-footer-baner",
  data() {
    return {
      items: [
        { title: "увеличенный срок службы тормозных дисков и колодок" },
        { title: "Увеличенная эффективность работы тормозных колодок" },
        { title: "Увеличение плавности торможения без потери эффективности" },
        { title: "Стабильные характеристики в широком диапазоне температур" },
      ],
    };
  },
};
</script>

<style lang="scss">
.home-footer-baner {
  background-image: url("@/assets/home-footer/home-footer-baner.png");
  background-position: center center;
  height: 800px;

  &__btn {
    width: 217px;
    background-color: $red;
    color: $white;
    border: 1px solid $red;
    border-radius: 100px;
    transition: 0.2s linear;

    &:hover {
      background-color: transparent;
      color: $red;
    }
  }

  &__row {
    max-width: 600px;

    &-col {
      max-width: 255px;
      margin-left: 80px;

      &:nth-child(2n + 1) {
        margin-left: 0;
      }
    }
  }
}
</style>
