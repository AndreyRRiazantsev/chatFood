export const actions = {
  async loadMenu({ commit }) {
    const result = await this.$axios.get('/static/menu.json').then((res) => {
      commit('SET_MENU_LIST', res.data);

      return res.data;
    }).catch(err => err);
    return result;
  },
}