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
};
</script>

<style lang="scss">
#app {}
</style>
