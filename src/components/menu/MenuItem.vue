<template>
  <div>
    <div
      class="menu-item-wrapper spasing"
      :class="{ 'selected-item':  isSelectedItem }"
      @click="addToCard"
    >
      <div class="menu-info">
        <p class="menu-item-title">
          {{ getMenuTitle }}
        </p>
        <p class="menu-item-description">{{ data.description }}</p>
        <p>AED {{ data.price }}</p>
      </div>
      <img
        v-if="data.photo"
        class="dish_img"
        :src="data.photo"
      />
    </div>
    <div class="separator"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'menu-item',
  // props: ['data', 'parentId', 'cachedItems'],
  props: {
    data: {
      type: Object,
      default: {},
    },
    parentId: {
      type: String,
      default: 0,
    },
    cachedItems: Object,
  },
  data: () => ({
    isSelectedItem: false,
    count: 0,
    title: null,
  }),
  computed: {
    getMenuTitle() {
      if (this.cachedItems) {
        this.isSelectedItem = true;
        this.count = this.cachedItems.count;

        return `${this.cachedItems.count} x ${this.data.name}`;
      }

      return this.count
        ? `${this.count} x ${this.data.name}`
        : this.data.name
    }
  },
  methods: {
    ...mapMutations('menu', ['SAVE_TO_LOCALSTORAGE']),

    addToCard() {
      this.count++;
      this.isSelectedItem = true;

      this.$store.commit('menu/SAVE_TO_LOCALSTORAGE',{
        parentId: this.parentId,
        record: {
          recordId: this.data.id,
          count: this.count
        }
      });
    }
  }
};
</script>

<style lang="scss">
.menu-item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .menu-item-title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 131.25%;
    color: #071C4D;
  }

  & .menu-item-description {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #838DA6;
    margin: 7px 0;
  }
}
.dish_img {
  border-radius: 7px;
  width: 91px;
  margin-left: 10px;
}

.separator {
  border-bottom: 1px solid #F4F6F9;
  margin: 21px 0px 21px 0px;
}
</style>
