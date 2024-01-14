<template>
  <form @submit.prevent class="form-template">
    <v-text-field
      label="Выше имя"
      variant="outlined"
      class="form-template__input color-white"
    ></v-text-field>
    <v-text-field
      label="Номер телефона"
      variant="outlined"
      class="form-template__input color-white mt-5"
    ></v-text-field>
    <v-text-field
      label="Email"
      variant="outlined"
      class="form-template__input color-white mt-5"
    ></v-text-field>
    <v-textarea
      label="Опишите суть обращения..."
      variant="outlined"
      class="form-template__textarea color-white mt-5"
    ></v-textarea>
    <v-btn type="submit" class="form-template__button mt-7">Отправить</v-btn>
  </form>
</template>

<script>
export default {
  name: "form-template",
};
</script>

<style lang="scss">
.form-template {
  width: 395px;

  &__input {
    height: 49px;

    & .v-field {
      height: 49px;
      border-color: $white;

      &__input,
      &__field,
      &__overlay {
        height: 49px;
      }

      &__overlay {
      }
    }
  }

  &__textarea {
    height: 116px;

    & .v-field {
      height: 116px;

      &__input,
      &__field,
      &__overlay {
        height: 116px;
      }
    }
  }

  &__button {
    width: 100%;
    border-radius: 100px;
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
</style>
