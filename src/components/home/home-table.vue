<template>
  <section class="home-table">
    <v-container>
      <h1 class="h1-dop color-white text-uppercase">
        колодки <span class="color-red">brannor</span> - это<br /><span
          class="home-table__title"
          >комфортное</span
        ><br />и <span class="color-red">безопасное</span> вождение
      </h1>

      <v-btn class="home-table__button text-uppercase mt-8">Подробнее</v-btn>

      <v-row no-gutters class="mt-10">
        <v-col cols="3">
          <v-sheet class="home-table__sheet d-flex align-center justify-center">
            <p class="text-uppercase color-white text-justify">
              керамический фрикционный материал, обеспечивающий высокую динамику
              начального торможения и длительные эксплуатационные характеристики
            </p>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet
            class="home-table__sheet --red d-flex align-center justify-center"
          >
            <p class="text-uppercase color-white text-justify">
              имеют высокую температурную характеристику и низкое пылеотделение
            </p>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="home-table__sheet d-flex align-center justify-center">
            <img src="../../assets/home/home-table-support.png" />
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="home-table__sheet d-flex align-center justify-center">
            <p class="text-uppercase color-white text-justify">
              выдерживают любые внешние условия и позволяют электронным системам
              вашего автомобиля, таким как ABS и ESP работать более эффективно
            </p>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet
            class="home-table__sheet --img d-flex align-center justify-center"
          >
            <img
              src="../../assets/home/home-table-car.png"
              class="home-table__sheet-img"
            />
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="home-table__sheet d-flex align-center justify-center">
            <p class="text-uppercase color-white text-justify">
              низкоабразивны к тормозным дискам, и практически не шумят
            </p>
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <v-sheet
            class="home-table__sheet --img d-flex align-center justify-center"
          >
            <img
              src="../../assets/home/home-table-disks.png"
              class="home-table__sheet-img"
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "home-table",
};
</script>

<style lang="scss">
.home-table {
  &__title {
    margin-left: 125px;
  }

  &__button {
    width: 217px;
    height: 38px;
    background-color: $red;
    border-radius: 100px;
    border: 1px solid $red;
    color: $white;
    transition: 0.2s linear;

    &:hover {
      background-color: transparent;
      color: $white;
    }
  }

  &__sheet {
    height: 242px;
    background: transparent !important;
    padding: 50px 20px;
    border: 1px solid $white !important;

    &.--red {
      background: $red !important;
      border-color: $red !important;
    }

    &.--img {
      padding: 0 !important;
    }

    &-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
