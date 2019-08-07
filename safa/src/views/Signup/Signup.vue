<template>
  <div class="sign">
    <div class="card-log">
      <form @submit.prevent="signup">
        <div>
          <label for="email">Email</label>
          <input v-model="email" id="email" type="text" placeholder="email"  />
          <p v-if="email">Please choose a email.</p>
        </div>
        <div>
          <label for="password">Password</label>
          <input v-model="password" id="password" type="password" placeholder="*******" />
          <p v-if="password">Please choose a password.</p>
        </div>
        <p v-if="feedback"></p>
        <div>
          <button class="btn btn-text">Sign Up</button>
        </div>
      </form>
      <p>&copy;2019 Acme Corp. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase/app";
import db from "../../firebase/init";

export default {
  name: "Signup",
  components: {},
  data() {
    return {
      email: '',
      password: '',
      feedback: ''
    };
  },
  methods: {
    signup() {
      // it save in firebase Auth db diff from normal db
      if (this.email && this.password) {
        // .doc == find doc
        let ref = db.collection("users").doc(this.email);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "this alias already exists";
          } else {
            // firebase package do auth process here
            this.feedback = null;
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              // it give us back cred obj back
              .then(cred => {
                console.log(cred.user);
                ref.set({
                  email: this.email,
                  password: this.password,
                  geolocation: null,
                  user_id: cred.user.uid
                });
              })
              .then(() => this.$router.push({ name: "UserLanding" }))
              .catch(err => {
                console.log(err);
                this.feedback = err.message;
              });
          }
        });
      } else {
        this.feedback = "You must enter all fields";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/abstract/mixins";
@import "../../sass/component/sign";
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