<template>
    <div class="container">
        <div class="card-list">
            <ProductCard 
                v-for="(product, index) in products" 
                v-bind:product="product"
                v-bind:index="index"
                v-bind:key="product.id"
            >
            </ProductCard>
        </div>    
    </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  props: ['products'],
  components: {
    ProductCard
  },
}
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
}
</style>