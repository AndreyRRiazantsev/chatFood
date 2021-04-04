// import Vue from 'vue';

export const mutations = {
  SET_MENU_LIST(state, payload) {
    state.menu = payload.categories.map((el) => {
      payload.items = payload.items.sort(compareMenuRecords);
      el.items = payload.items.filter((item) => item.category_id === el.id);

      return el;
    })

    state.menu = state.menu.sort(compareMenuRecords);
  },
  SAVE_TO_LOCALSTORAGE(state, payload) {
    const params = {
      [`${payload.parentId}-${payload.record.recordId}`]: {
        ...payload.record 
      }
    }

    state.selectedItems = {
      ...state.selectedItems,
      ...params
    };

    localStorage.setItem('selectedItems', JSON.stringify(state.selectedItems));
  },
  INITIALIZE_STORAGE(state, payload) {
    state.selectedItems = JSON.parse(payload);
  },
  RESTORE_STORAGE(state) {
    localStorage.removeItem('selectedItems');
    state.selectedItems = {};
  }
}

function compareMenuRecords(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  let comparison = 0;

  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }

  return comparison;
}