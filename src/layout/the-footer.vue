<template>
  <footer
    class="the-footer d-flex flex-column align-center justify-center mb-12"
  >
    <img src="../assets/footer/footer-logo.png" class="the-footer__img pb-5" />
    <div class="d-flex mt-8">
      <router-link
        :to="{ name: 'home' }"
        v-for="item in items"
        :key="item"
        class="the-footer__item d-block"
      >
        <p class="color-white">
          {{ item.title }}
        </p>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "the-footer",
  data() {
    return {
      items: [
        { title: "Контакты" },
        { title: "Оплата" },
        { title: "Доставка  " },
        { title: "Поддержка" },
      ],
    };
  },
};
</script>

<style lang="scss">
.the-footer {
  margin-top: 100px;

  &__img {
    border-bottom: 1px solid $white;
    padding-left: 200px;
    padding-right: 200px;
  }

  &__item {
    margin-right: 100px;
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
