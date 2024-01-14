<template>
  <section class="home-filter d-flex flex-column align-center">
    <v-container>
      <h1 class="color-white text-center">Выберите свой автомобиль</h1>
      <div class="d-flex align-center justify-center mt-6">
        <v-select
          label="Марка"
          :items="['Марка 1', 'Марка 2', 'Марка 3']"
          hide-details="true"
          class="home-filter__select"
        ></v-select>

        <v-select
          label="Модель"
          :items="['Модель 1', 'Модель 2', 'Модель 3']"
          hide-details="true"
          class="home-filter__select"
        ></v-select>

        <v-select
          label="Год"
          :items="['Год 1', 'Год 2', 'Год 3']"
          hide-details="true"
          class="home-filter__select"
        ></v-select>

        <v-select
          label="Комплектация"
          :items="['Комплектация 1', 'Комплектация 2', 'Комплектация 3']"
          hide-details="true"
          class="home-filter__select"
          height="38"
        ></v-select>

        <v-btn class="home-filter__button ml-8">Поиск по каталогу</v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "home-filter",
};
</script>

<style lang="scss">
.home-filter {
  &__select {
    max-width: 180px;
    color: $white;
    margin-left: 60px;

    & .v-field__overlay {
      background-color: transparent !important;
    }
  }

  &__button {
    background-color: $red !important;
    color: $white !important;
    border-radius: 100px !important;
    width: 217px;
    height: 56px !important;
  }
}
</style>
