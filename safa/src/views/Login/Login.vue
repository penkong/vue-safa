<template>
  <div class="login">
    <div class="card-log">
      <form @submit.prevent="login">
        <div>
          <label for="email">Email</label>
          <input type="text" v-model="email" placeholder="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" placeholder="*********" />
          <p v-if="feedback">Please choose a password.</p>
        </div>
        <div class="btn-row">
          <button class="btn btn-text btn--green">Log In</button>
          <a href="#">Forgot Password?</a>
        </div>
      </form>
      <p>&copy;2019 Acme Corp. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Login",
  props: ["isLoggedIn"],
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user);
            this.$router.push({ name: "UserLanding" });
          })
          .catch(err => {
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = "please fill both fields";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/abstract/mixins";
@import "Login";
@import "../../sass/component/log-card";
@import "../../sass/component/button";
</style>