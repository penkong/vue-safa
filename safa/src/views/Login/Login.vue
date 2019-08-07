<template>
  <div class="login">
    <div class="card-log">
      <form>
        <div>
          <label for="username">Username</label>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="*********" />
          <!-- <p class="text-red-500 text-xs italic border-red-500">Please choose a password.</p> -->
        </div>
        <div class="btn-row">
          <button class="btn btn-text btn--green" type="button" @click="login">Sign In</button>
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
  methods: {
    login() {
      this.isLoggedIn = true;
      this.$emit("loggedChange", e.target.value);
      this.$router.push("/userland");
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