<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
@import "sass/abstract/variables";
@import "sass/abstract/mixins";
@import "sass/base/base";
</style>
