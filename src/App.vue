<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MenuLayout from './layouts/MenuLayout';
export default {
  components: {
    MenuLayout,
  },
  created() {
    if (localStorage.getItem('selectedItems')) {
      this.$store.commit('menu/INITIALIZE_STORAGE', localStorage.getItem('selectedItems'));
    }
  }
};
</script>

<style lang="scss">
#app {}
</style>
