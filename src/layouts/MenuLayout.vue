<template>
  <div class="menu-container">
    <img
      src="@/assets/Group.svg"
      class="spasing"
      @click="() => RESTORE_STORAGE()"
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
    MenuList
  },
  mounted() {
    if (localStorage.getItem('selectedItems')) {
      this.$store.commit('menu/INITIALIZE_STORAGE', localStorage.getItem('selectedItems'));
    }
  },
  methods: {
    ...mapMutations('menu', ['RESTORE_STORAGE'])
  }
}
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