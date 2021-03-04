<template>
  <Index />
</template>

<script>
import Index from './pages/products/Index'

export default {
  name: "App",
  components: {
    Index
  },
  created () {
    console.log(this.$store.state.products)
  }
};
</script>
