<template>
  <nav class="header">
    <router-link :to="{ name: 'Home' }" class="safa type1">SAFA RAYANEH</router-link>
    <ul v-if="isLoggedIn">
      <li>
        <router-link :to="{ name: 'UserLanding' }">Our Projects</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
      <li>
        <a class="item" @click="logout">logout</a>
      </li>
    </ul>
    <ul v-else>
      <li>
        <router-link :to="{ name: 'Signup' }">Signup</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Login' }" :isLoggedIn="isLoggedIn">Login</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import firebase from "firebase/app";
export default {
  name: "Header",
  props: ["isLoggedIn"],
  data() {
    return {};
  },
  methods: {
    logout() {
      this.isLoggedIn = !this.isLoggedIn;
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    }
  },
  onLoggedChange() {},
  created() {
    // let user = firebase.auth().currentUser;
    this.isLoggedIn;
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.user = user;
    //   } else {
    //     this.user = null;
    //   }
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../sass/abstract/mixins";
@import "Header";
</style>
