import { createStore } from "vuex";

export default createStore({
  state: () => ({
    products: [
      {
          id: '1',
          name:'Рождение Венеры',
          author: 'Сандро Боттичелли',
          price: '1 000 000',
          oldPrice: '2 000 000',
          img: 'picture4.png',
          sold: false,
      },
      {
          id: '2',
          name: 'Тайная вечеря',
          author: 'Леонардо да Винчи',
          price: '3 000 000',
          img: 'picture3.png',
          sold: false,
      },
      {
          id: '3',
          name: 'Сотворение Адама',
          author: 'Микеланджело',
          price: '5 000 000',
          oldPrice: '6 000 000',
          img: 'picture2.png',
          sold: false
      },
      {
          id: '4',
          name: 'Урок анатомии',
          author: 'Рембрандт',
          price: '4 000 000',
          img: 'picture1.png',
          sold: true
      }
    ]
  }),
});
