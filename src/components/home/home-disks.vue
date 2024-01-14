<template>
  <section class="home-disks">
    <v-container>
      <h1 class="home-disks__title h1-dop text-uppercase color-white">
        Диски и колодки <br /><span class="color-red">Brannor</span> это<br />
        высокотехнологичный <br />
        <span class="home-disks__title-center d-block">
          и
          <span class="color-red">максимально <br />эффективный</span>
          <br />продукт
        </span>
      </h1>
      <img src="@/assets/home/home-disks.png" class="home-disks__img" />
    </v-container>
  </section>
</template>

<script>
export default {
  name: "home-disks",
};
</script>

<style lang="scss">
.home-disks {
  &__title {
    position: relative;
    z-index: 1;
    max-width: 1093px;

    &-center {
      margin-left: 120px;
    }
  }

  &__img {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
