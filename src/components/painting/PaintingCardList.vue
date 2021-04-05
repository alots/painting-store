<template>
  <p>Картины эпохи возрождения</p>
  <div class="painting-list">
    <painting-card
      v-for="(product, index) in products"
      v-bind:product="product"
      v-bind:index="index"
      v-bind:key="product.id"
    >
    </painting-card>
  </div>
</template>

<script>
import PaintingCard from "./PaintingCard.vue";

export default {
  name: "PaintingCardList",
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    PaintingCard
  }
};
</script>

<style scoped>
.painting-list {
  display: flex;
  flex-direction: row;
}

p {
  padding-top: 45px;
  padding-bottom: 23px;
  height: auto;
  width: max-content;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  color: 343030;
}
</style>
