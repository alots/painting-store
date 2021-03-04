<template>
    <div v-bind:class="['product', { 'product-sold': product.sold}]">
        <img class="product-image" :src="'/img/' + product.img"/>
        <div class="product-info">
            <div class="product-info-name"><q>{{product.name}}</q></div>
            <div class="product-info-author">{{product.author}}</div>
        </div>
        <div v-if="(product.sold !== true) " class="product-price">
            <div class="product-price-info">
                <p v-if="product.oldPrice !== undefined" class="product-price-old">{{product.oldPrice + ' $'}}</p>
                <p class="product-price-current">{{product.price + ' $'}}</p>
            </div>
            <button  class="product-btn-addInCard" v-on:click="addProduct">В корзине</button>
            <button  class="product-btn-buy" v-on:click="addProduct">Купить </button>
        </div>
        <div v-else>
            <p class="product-sold-text">Продана на аукционе</p>
        </div>
    </div>
</template>
<script>
import { store } from '../../store'

export default {
    props: ['product'],
    store,
    data () {
        return ({
            add: 0
        });
    },
    methods: {
        addProduct: function() {
            this.$store.commit('addInCart')
            console.log(this.$store.state.buy)
        }
    }
}
</script>
<style scoped>
q {
    quotes: "\00ab" "\00bb";
}
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 280px;
    height: 328px;
    margin: 16px;

    border: 1px solid #E1E1E1;
}

.product-sold {
    opacity: 0.3;
}

.product-price {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    max-height: 50px;
    width: 100%;
    padding: 24px;
}

.product-price-old {
    text-decoration-line: line-through;
}

.product-btn-buy {
    height: 48px;
    width: 120px;

    background: #382E2B;
    color: #F4F6F9;
}

.product-btn-addInCard {
    height: 48px;
    width: 120px;

    background: #5B3A32;
    color: #F4F6F9;
}

.product-sold-text {
    padding: 24px;
}

.product:first-child {
    padding-left: 0;
}

.product:last-child {
    padding-right: 0;
}
</style>