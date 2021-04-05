<template>
  <div>
    <MainHeader />
    <slot></slot>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

export default {
  name: "MainLayout",
  components: {
    MainHeader,
    MainFooter
  }
};
</script>
