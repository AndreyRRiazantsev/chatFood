import helpers from '@/helpers/index';
import mockData from '../../public/static/menu.json';

export const formattedMenuData = mockData.categories.map((el) => {
  let sortedSortedMenu = mockData.items.sort(helpers.compareMenuRecords);
  el.items = sortedSortedMenu.filter((item) => item.category_id === el.id);

  return el;
});

export const filteredMenuData = (message) => {
  return formattedMenuData.map(el => {
    const filteredItems = el.items.filter(item => item.name.toLowerCase().includes(message));
  
    if (filteredItems.length) {
      return {
        ...el,
        items: filteredItems
      }
    }
  
    return []; 
  });
};
