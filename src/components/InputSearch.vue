<template>
  <div class="spasing">
    <p class="search-label">Search</p>
    <input
      v-model="message"
      type="text"
      class="input-search"
      placeholder="Search for dishes..."
      @input="() => SET_SEARCH_QUERY(message)"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'input-search',
  data: () => ({
    message: '',
  }),
  methods: {
    ...mapMutations('menu', ['SET_SEARCH_QUERY']),
  },
};
</script>

<style lang="scss">
.input-search {
  box-sizing: border-box;
  width: 100%;
  padding: 14px;
  background: #FFFFFF;
  border: 2px solid #EBEFF4;
  box-sizing: border-box;
  border-radius: 7px;
  outline: none;

  font-family: Inter;
  font-size: 14px;
}

.search-label {
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 134.61%;
  letter-spacing: -0.01em;
  color: #050505;
  padding-bottom: 28px;
}
</style>
