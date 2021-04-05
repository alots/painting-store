<template>
  <PaintingCardList :products="$store.state.products" />
</template>

<script>
import PaintingCardList from "../../components/painting/PaintingCardList";

export default {
  name: "Index",
  components: {
    PaintingCardList
  }
};
</script>

<style scoped>

</style>
