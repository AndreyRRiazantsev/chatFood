<template>
  <div class="menu-container">
    <img
      src="@/assets/Group.svg"
      class="spasing"
      @click="() => CLEAR_STORAGE()"
    />
    <input-search/>
    <menu-list/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import InputSearch from '@/components/InputSearch';
import MenuList from '../components/menu/MenuList';

export default {
  components: {
    InputSearch,
    MenuList,
  },
  methods: {
    ...mapMutations('menu', ['CLEAR_STORAGE']),
  },
};
</script>

<style lang="scss" scoped>
.menu-container {
  background-color:white;
  padding: 59.15px 0px 21px 0px;
  width: 375px;

  & img {
    cursor: pointer;
    margin-bottom: 21px;
  }
}
</style>
