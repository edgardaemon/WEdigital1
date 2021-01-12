<template>
  <div class="accordion" @click="isOpened = !isOpened">
    <div class="accordion__header" :class="{ active: isOpened }">
      <div class="accordion__index">
        {{ index }}
      </div>
      <div class="accordion__title">
        {{ title }}
      </div>
      <div class="accordion__icon">
        <img src="@/assets/images/arrow-down.svg" alt="Arrow down" />
      </div>
    </div>
    <VueSlideToggle :open="isOpened" tag="section" :duration="500">
      <div class="accordion__body" :class="{ active: isOpened }">
        <ul>
          <li v-for="(listItem, index) in list" :key="index">{{ listItem }}</li>
        </ul>
      </div>
    </VueSlideToggle>
  </div>
</template>

<script>
import { VueSlideToggle } from "vue-slide-toggle";

export default {
  props: {
    index: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data: () => ({
    isOpened: false
  }),
  transition: {
    name: "accordion",
    mode: "out-in"
  },
  components: {
    VueSlideToggle
  }
};
</script>


<style lang="scss" scoped>

.accordion {
  background: #141414;
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
  padding-top: 28px;
  user-select: none;
  border-bottom: 2px solid #353535;

 &:hover {
    -webkit-text-stroke: 0.3px white;
    -webkit-text-fill-color: transparent;
  }

  &__header {
    display: flex;
    align-items: center;

    &.active {
      img {
        transform: rotate(180deg);
      }
    }
  }

  &__icon {
    min-width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: .2s all;
    margin-left: auto;

    img {
      transition: .2s all;
    }
  }

  &__index {
    display: none;
  }

  &__title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 155.9%;
  color: #FFFFFF;

 
  }

  &__body {
    background: #141414;
    display: none;
    margin-top: 16px;
    
    &.active {
      display: flex;
    }

    ul {
      padding-left: 0;
      li {
        color: #ffffff;
        font-size: 24px;
        font-weight: 500;
        position: relative;
        display: flex;
        align-items: center;
        &::before {
          content: '';
          min-width: 5px;
          height: 5px;
          background: #ffffff;
          border-radius: 50%;
          margin-right: 15px;
        }
      }
    }
  }
}



@media screen and (max-width: 991px) {
    div .accordion {
      padding-top: 12px;
      padding-bottom: 12px;

    }

    div .accordion__title {
      font-size: 20px;
    }

    .accordion__icon img {
      width: 25px;
    }

    .accordion__body {
      padding: 0;
    }

    .accordion__body ul li {
      font-size: 18px;
    }
}

@media screen and (max-width: 767px) {
    div .accordion {
      padding-top: 10px;
      padding-bottom: 10px;

    }

    div .accordion__title {
      font-size: 16px;
    }

    .accordion__icon img {
      width: 20px;
    }

    .accordion__body {
      padding: 0;
    }

    .accordion__body ul li {
      font-size: 15px;
    }
}


@media screen and (max-width: 576px) {
    div .accordion {
      padding-top: 5px;
      padding-bottom: 5px;

    }

    div .accordion__title {
      font-size: 14px;
    }

    .accordion__icon img {
      width: 18px;
    }

    .accordion__body {
      padding: 0;
    }

    .accordion__body ul li {
      font-size: 12px;
    }}
</style>