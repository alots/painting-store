<template>
  <main-layout class="main">
    <div class="main__container">
      <router-view />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "./layout/MainLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout
  },
  created() {
    console.log(this.$store.state.products);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");
* {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
html,
body {
  width: 100%;
  margin: 0;
  height: 100%;

  font-family: "Merriweather";
  color: 343030;
}

#app {
  font-family: "Merriweather";
}

.main {
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas:
    "mh mh    mh"
    ". container ."
    "mf mf mf";
}

.main__container {
  grid-area: container;
}
</style>
