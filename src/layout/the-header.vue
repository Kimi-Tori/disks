<template>
  <header class="the-header">
    <v-container class="d-flex justify-center">
      <router-link
        :to="{ name: 'home' }"
        class="the-header__logo d-flex align-center pa-2"
      >
        <v-btn class="the-header__logo-btn">
          <img
            class="the-header__logo-btn__img"
            src="../assets/header/logo.png"
          />
        </v-btn>
      </router-link>

      <v-autocomplete
        :items="items"
        append-inner-icon="mdi-magnify"
        auto-select-first
        hide-details="true"
        class="the-header__search ml-9"
        density="comfortable"
        item-props
        menu-icon=""
        placeholder="Выберите артикул товара..."
        rounded
        variant="solo"
      />
      <div class="the-header__menu d-flex align-center ml-11">
        <router-link
          :to="{ name: 'home' }"
          class="the-header__menu-item ml-10 color-white"
          >Компания</router-link
        >
        <router-link
          :to="{ name: 'home' }"
          class="the-header__menu-item ml-10 color-white"
          >Продукция</router-link
        >
        <router-link
          :to="{ name: 'home' }"
          class="the-header__menu-item ml-10 color-white"
          >Поддержка</router-link
        >
        <router-link
          :to="{ name: 'home' }"
          class="the-header__menu-item ml-10 color-white"
          >Где купить</router-link
        >
      </div>

      <v-dialog>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="the-header__dialog-button my-auto ml-8"
            >Вход</v-btn
          >
        </template>

        <template v-slot:default="{ isActive }">
          <v-card>
            <v-card-text>
              Я так понимаю что здесь будут находиться инпуты для входа в
              аккаунт
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Закрыть" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <div class="the-header__language d-flex">
        <img
          src="../assets/header/language.png"
          class="the-header__language-img ml-4 my-auto"
        />
        <v-autocomplete
          v-model="values"
          :items="items"
          hide-details="true"
          class="the-header__language-input ml-2"
        ></v-autocomplete>
      </div>
    </v-container>
  </header>
</template>

<script>
export default {
  name: "the-header",
  data: () => ({
    items: ["ru", "en"],
    values: "ru",
  }),
};
</script>

<style lang="scss">
.the-header {
  background-color: $dark;

  &__logo {
    background-color: $white;
    border-radius: 100px;

    &-btn {
      box-shadow: none !important;
    }
  }

  &__search {
    max-width: 395px;

    & .v-field {
      background-color: transparent !important;
      color: $white;
      box-shadow: none !important;
      border: 1px solid $white !important;
    }
  }

  &__menu-item {
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid $white;
    }
  }

  &__dialog-button {
    background-color: transparent !important;
    color: $red !important;
    box-shadow: none !important;
    border: 1px solid $red !important;
    border-radius: 100px !important;
    text-transform: uppercase;
    width: 165px;
    height: 38px;
    transition: 0.2s linear;

    &:hover {
      background-color: $red !important;
      color: $white !important;
    }
  }

  &__language {
    &-img {
      width: 27px;
      height: 27px;
    }

    &-input {
      color: $white !important;

      & .v-field__overlay {
        background-color: transparent !important;
      }

      & .v-field__outline {
        display: none;
      }
    }
  }
}
</style>
