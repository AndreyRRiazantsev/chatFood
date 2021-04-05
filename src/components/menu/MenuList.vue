<template>
  <div v-if="getMenu" class="menu-list">
    <div
      v-for="(item, index) in getMenuList"
      :key="index"
    >
      <p class="category-title spasing">{{ item.name }}</p>
      <menu-item
        v-for="record in item.items"
        :key="record.id"
        :data="record"
        :parent-id="item.id"
        :cached-items="selectedItems[`${item.id}-${record.id}`]"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import MenuItem from './MenuItem';

export default {
  name: 'menu-list',
  components: {
    MenuItem,
  },
  async mounted() {
    await this.loadMenu()
  },
  computed: {
    ...mapGetters('menu', ['getMenu',]),
    ...mapState('menu', ['selectedItems', 'searchQuery']),

    getMenuList() {
      if (!this.searchQuery) {
        return this.getMenu;
      }

      const data = [ ...this.getMenu ];

      return data.map(el => { 
        const filteredItems = el.items.filter(item => item.name.toLowerCase().includes(this.searchQuery));

        if (filteredItems.length) {
          return {
            ...el,
            items: filteredItems
          }
        }

        return [];
      });
    }
  },
  methods: {
    ...mapActions('menu', ['loadMenu']),
  },
};
</script>

<style lang="scss">
.menu-list {
  margin-top: 21px;
}
.category-title {
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 134.61%;
  letter-spacing: -0.01em;
  color: #071C4D;
  padding-bottom: 21px;
}
</style>
