<template>
  <section class="home-advantages">
    <v-container>
      <h1 class="h1-dop color-white text-uppercase">
        <span class="color-red">ваши ощущения</span> на дороге<br /><span
          class="home-advantages__title"
          >в надёжных руках</span
        >
      </h1>

      <div class="home-advantages__box d-flex justify-space-between mt-12">
        <div>
          <div
            v-for="item in items"
            :key="item"
            class="home-advantages__box-item d-flex mt-6"
          >
            <div class="home-advantages__box-item__img">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6794 27.654L27.0127 14.3206L13.6794 0.987305L11.3044 3.32064L20.6377 12.654L0.346029 12.654V15.9873L20.6377 15.9873L11.3044 25.3206L13.6794 27.654Z"
                  fill="#F52626"
                />
              </svg>
            </div>
            <p
              class="home-advantages__box-item__title text-uppercase color-white ml-2"
            >
              {{ item.title }}
            </p>
          </div>
        </div>
        <div class="home-advantages__content">
          <p class="color-white">
            Лучшие фрикционные материалы для тормозных колодок обеспечивают
            оптимальные характеристики для обычных водителей и любителей
            активной езды
          </p>
          <img src="../../assets/home/home-advantages.png" class="mt-8" />
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "home-tabs",
  data() {
    return {
      items: [
        { title: "материалы" },
        { title: "качество" },
        { title: "дизайн" },
        { title: "подход" },
        { title: "производство" },
        { title: "ассортимент" },
        { title: "технологии" },
      ],
    };
  },
};
</script>

<style lang="scss">
.home-advantages {
  &__title {
    margin-left: 125px;
  }

  &__box {
    margin-left: 125px;

    &-item {
      cursor: pointer;

      &:hover > &__img {
        transform: rotate(-45deg);
      }

      &:hover > &__title {
        opacity: 1;
      }

      &__title {
        opacity: 0.6;
        transition: 0.2s linear;
      }

      &__img {
        transition: 0.2s linear;
      }
    }
  }

  &__content {
    max-width: 700px;
  }
}
</style>
