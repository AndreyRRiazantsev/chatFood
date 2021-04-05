import helpers from '@/helpers/index';
import mockData from '../../public/static/menu.json';
import { filteredMenuData } from '../utils/index';

describe('Data formats', () => {
  it('get formatted data by categories', () => {
    const categoryObjectById = mockData.categories.find((el) => el.id === '1');

    categoryObjectById.items = mockData.items.filter((el) => el.category_id === categoryObjectById.id);

    const formattedMenuData = {
      ...categoryObjectById,
    };

    const expectedResult = {
      id: '1',
      name: 'Burgers',
      url: 'burgers',
      items: [
        {
          id: '3',
          name: 'Avo Burger',
          url: 'avo-burger',
          price: 4300,
          discount_rate: 0,
          stock: {
            availability: 8,
          },
          description: 'Delicious Avo Chicken Burger with Swiss Cheese.',
          photo: null,
          category_id: '1',
        },
        {
          id: '2',
          name: 'Cheese Burger',
          url: 'cheese-burger',
          price: 1500,
          discount_rate: 0.2,
          stock: {
            availability: 1,
          },
          description: 'Very nice cheese burger.',
          photo: 'https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/cheese-burger.jpg',
          category_id: '1',
        },
        {
          id: '1',
          name: 'Chicken & Avocado',
          url: 'chicken-avocado',
          price: 3500,
          discount_rate: 0.1,
          stock: {
            availability: 100,
          },
          description: 'Grilled chicken, avocado, tomato, iceberg lettuce and mayonnaise',
          photo: 'https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/chicken-avocado.jpg',
          category_id: '1',
        },
      ],
    };

    expect(formattedMenuData).toEqual(expectedResult);
  });

  it('filter data by existing text', () => {
    const expectedResult = {
      id: '1',
      items: [
        {
          category_id: '1',
          description: 'Delicious Avo Chicken Burger with Swiss Cheese.',
          discount_rate: 0,
          id: '3',
          name: 'Avo Burger',
          photo: null,
          price: 4300,
          stock: {
            availability: 8,
          },
          url: 'avo-burger',
        },
      ],
      name: 'Burgers',
      url: 'burgers',
    };

    expect(filteredMenuData('avo burger')[0]).toEqual(expectedResult);
  });

  it('handle empty result', () => {
    const expectedResult = [];

    expect(filteredMenuData('nothing')[0]).toEqual(expectedResult);
  });
});
