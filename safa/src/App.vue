<template>
  <div id="app">
    <Header :isLoggedIn="isLoggedIn" />
    <router-view :isLoggedIn="isLoggedIn" />
    <Footer />
  </div>
</template>
<script>
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import db from "./api/firebase/init";
export default {
  name: "App",
  data() {
    return {
      isLoggedIn: null
    };
  },
  components: {
    Header,
    Footer
  },
  created() {
    // db.collection("users")
    //   .get()
    //   .then(snapshot => {
    //     snapshot.forEach(user => console.log(user));
    //   });
  }
};
</script>
<style lang="scss">
@import "sass/abstract/variables";
@import "sass/abstract/mixins";
@import "sass/base/base";
</style>
