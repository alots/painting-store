<template>
  <div v-bind:class="['painting', { 'painting-sold': product.sold }]">
    <img class="painting__image" :src="'/img/' + product.img" />
    <div class="painting__info">
      <q>{{ product.name }}</q>
      <div class="painting__info-author">{{ product.author }}</div>
    </div>
    <div v-if="product.sold !== true" class="painting__price">
      <div class="painting__price-info">
        <p
          v-if="product.oldPrice !== undefined"
          class="painting__price-info__old"
        >
          {{ product.oldPrice + " $" }}
        </p>
        <p class="painting__price-info__current">{{ product.price + " $" }}</p>
      </div>
      <button
        v-if="product.inCart === false"
        class="painting__button-buy"
        v-on:click="addProduct"
      >
        Купить
      </button>
      <button
        v-else-if="product.inCart === true"
        class="painting__button-addInCard"
        v-on:click="addProduct"
      >
        В корзине
      </button>
    </div>
    <div v-else>
      <p class="painting__sold-text">Продана на аукционе</p>
    </div>
  </div>
</template>
<script>
import store from "../../store/index";
import { getProduct } from "../../store/api";

export default {
  name: "PaintingCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  store,
  methods: {
    addProduct: function() {
      getProduct().then(store.commit("inCart", this.product.id));
      console.log(store.state.products);
    }
  }
};
</script>
<style scoped>
q {
  quotes: "\00ab""\00bb";
  width: max-content;
  height: auto;
}
.painting {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 328px;
  margin: 16px;

  border: 1px solid #e1e1e1;
}

.painting__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.painting__info-author {
  width: max-content;
  height: auto;
}

.painting-sold {
  opacity: 0.3;
}

.painting__price {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-height: 50px;
  width: 100%;
  margin-bottom: 16px;
}

.painting__price-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 24px;
}

.painting__price-info__old {
  text-decoration-line: line-through;
  width: max-content;
  height: auto;
}

.painting__price-info__current {
  width: max-content;
  height: auto;
}

.painting__button-buy {
  max-height: 48px;
  max-width: 120px;
  margin-right: 24px;

  background: #382e2b;
  color: #f4f6f9;
  border-style: none;
}

.painting__button-buy:hover {
  background: rgba(119, 103, 99, 1);
}

.painting__button-addInCard {
  height: 48px;
  margin-right: 24px;

  background: #5b3a32;
  color: #f4f6f9;
  border-style: none;
}

.painting__sold-text {
  padding: 24px;
}

.painting:first-child {
  margin-left: 0;
}

.painting:last-child {
  margin-right: 0;
}
</style>
