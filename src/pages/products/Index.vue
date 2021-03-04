<template>
    <div class="container">
        <ProductCardList :products="$store.state.products" />   
    </div>
</template>

<script>
import ProductCardList from '../../components/Product/ProductCardList';

export default {
  components: {
    ProductCardList
  },
}
</script>

<style scoped>

</style>