<template>
  <div class="signup">
    <div class="card-log">
      <form>
        <div>
          <label for="email">Email</label>
          <input id="email" type="text" placeholder="email" />
        </div>
        <div>
          <label for="username">Username</label>
          <input id="username" type="text" placeholder="Username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="*******" />
          <!-- <p v-if="empty" class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div>
          <button class="btn btn-text" type="button">Sign Up</button>
        </div>
      </form>
      <p>&copy;2019 Acme Corp. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Signup",
  components: {},
  data() {
    return {
      empty: false
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/abstract/mixins";
@import "Signup";
@import "../../sass/component/log-card";
@import "../../sass/component/button";
.btn {
  &,
  &:link,
  &:visited {
    display: block;
    margin: 0 auto;
  }
}
</style>