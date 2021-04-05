import helpers from '../../helpers/index';

export const mutations = {
  SET_MENU_LIST(state, payload) {
    state.menu = payload.categories.map((el) => {
      const sortedList = payload.items.sort(helpers.compareMenuRecords);
      el.items = sortedList.filter((item) => item.category_id === el.id);

      return el;
    });

    state.menu = state.menu.sort(helpers.compareMenuRecords);
  },
  SAVE_TO_LOCALSTORAGE(state, payload) {
    const params = {
      [`${payload.parentId}-${payload.record.recordId}`]: {
        ...payload.record,
      },
    };

    state.selectedItems = {
      ...state.selectedItems,
      ...params,
    };

    localStorage.setItem('selectedItems', JSON.stringify(state.selectedItems));
  },
  INITIALIZE_STORAGE(state, payload) {
    state.selectedItems = JSON.parse(payload);
  },
  CLEAR_STORAGE(state) {
    try {
      localStorage.removeItem('selectedItems');
      state.selectedItems = {};
    } catch (e) {
      console.error('Error while clear storage');
    }
  },
  SET_SEARCH_QUERY(state, message) {
    state.searchQuery = message;
  },
};
