<template>
  <section class="home-footer-disks">
    <v-container>
      <span class="size-big-span text-uppercase color-red">Товары</span>
      <h1
        class="home-footer-disks__title h1-dop text-uppercase color-white mt-10"
      >
        Диски и колодки Brannor<br />это высокотехнологичный<br />и
        максимально<br />эффективный продукт
      </h1>
      <div class="home-footer-disks__plah d-flex flex-wrap">
        <p
          v-for="item in items"
          :key="item"
          class="home-footer-disks__plah-item color-white mt-5 mr-5"
        >
          {{ item.title }}
        </p>
      </div>
      <img src="@/assets/home/home-disks.png" class="home-footer-disks__img" />
    </v-container>
  </section>
</template>

<script>
export default {
  name: "home-footer-disks",
  data() {
    return {
      items: [
        { title: "увеличение плавности торможения без потери эффективности" },
        { title: "увеличенный срок службы" },
        { title: "увеличинная эффективность работы" },
        { title: "стабильные характеристики в широком диапазоне температур" },
      ],
    };
  },
};
</script>

<style lang="scss">
.home-footer-disks {
  &__title {
    position: relative;
    z-index: 1;
    max-width: 1093px;
  }

  &__plah {
    max-width: 600px;

    &-item {
      border: 1px solid $red;
      border-radius: 100px;
      padding: 10px 20px;
      width: fit-content;
    }
  }

  &__img {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
