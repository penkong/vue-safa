<template>
  <div class="login">
    <div class="card-log">
      <form @submit.prevent="login">
        <div>
          <label for="username">Username</label>
          <input type="text" v-model="username" placeholder="Username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" placeholder="*********" />
          <p v-if="feedback">Please choose a password.</p>
        </div>
        <div class="btn-row">
          <button class="btn btn-text btn--green" type="button">Log In</button>
          <a href="#">Forgot Password?</a>
        </div>
      </form>
      <p>&copy;2019 Acme Corp. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ["isLoggedIn"],
  data() {
    return {
      username: "",
      password: "",
      feedback: false
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "UserLanding" });
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