<template>
  <section class="home-plus">
    <v-container class="home-plus__container">
      <div class="home-plus__container-text --1">
        <h2 class="h2 text-uppercase color-white">Высокая термостойкость</h2>
        <p class="color-white mt-4">
          Высокоуглеродистый чугун обладает более высокой теплоемкостью и
          прочностью, что позволяет ему эффективнее справляться с нагревом и
          избегать температурной деформации.
        </p>
      </div>
      <div class="home-plus__container-text --2">
        <h2 class="h2 text-uppercase color-white">Стойкость к износу</h2>
        <p class="color-white mt-4">
          Все тормозные диски Brannor имеют обязательную износоустойчивую
          маркировку, на которой указан максимально допустимый износ, что
          позволяет упростить процесс оценки износа тормозного диска.
        </p>
      </div>
      <div class="home-plus__container-text --3">
        <h2 class="h2 text-uppercase color-white">улучшенный теплообмен</h2>
        <p class="color-white mt-4">
          несквозная перфорация сложной формы обеспечивает увеличение
          коэффициента трения и создает аэродинамические потоки воздуха для
          лучшего охлаждения, не жертвуя при этом прочностью материала и
          снижением термальной массы.
        </p>
      </div>
      <div class="home-plus__container-text --4">
        <h2 class="h2 text-uppercase color-white">
          Высочайшая защита от коррозии
        </h2>
        <p class="color-white mt-4">
          Цинконаполненное полимерное покрытие обеспечивает выдающиеся
          характеристики в течение всего срока использования и позволяет
          защитить нерабочие элементы тормозного диска от коррозии и воздействия
          агрессивной среды.
        </p>
      </div>
      <div class="d-flex align-center justify-center flex-column">
        <img src="@/assets/home/home-plus.png" />
        <v-btn class="home-plus__container-btn text-uppercase">Каталог</v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "home-plus",
};
</script>

<style lang="scss">
.home-plus {
  background-color: $dark;

  &__container {
    position: relative;
    z-index: 1;

    &-text {
      max-width: 490px;

      &.--1 {
        position: absolute;
        top: -100px;
        left: 175px;

        & p {
          max-width: 375px;
        }
      }
      &.--2 {
        position: absolute;
        top: 0;
        right: -25px;
      }
      &.--3 {
        position: absolute;
        bottom: 70px;
        left: 200px;
      }
      &.--4 {
        position: absolute;
        bottom: 130px;
        right: 25px;
      }
    }

    &-btn {
      margin-top: 94px;
      width: 220px;
      background-color: $red;
      color: $white;
      border-radius: 100px;
      border: 1px solid $red;
      transition: 0.2s linear;

      &:hover {
        background-color: transparent;
        color: $red;
      }
    }
  }
}
</style>
