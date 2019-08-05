<template>
  <nav class="header">
      <router-link  :to="{ name: 'Home'}"
        class="safa bg-transparent text-blue-900 font-bold hover:text-red-700"
      >Safa Rayaneh</router-link>
      <div>
        
        <router-link :to="{name: 'Home'}"
          class="bg-transparent  text-blue-900 font-normal hover:text-red-400"
        >Home</router-link>
        <router-link :to="{name: 'About'}"
          class="bg-transparent text-blue-900 font-normal hover:text-red-400 py-2 px-4"
        >About</router-link>
      </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: null
    };
  },
  // methods: {
  //   logout() {
  //     firebase
  //       .auth()
  //       .signOut()
  //       .then(() => {
  //         this.$router.push({ name: "Login" });
  //       });
  //   }
  // },
  // created() {
  //   // let user = firebase.auth().currentUser;
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.user = user;
  //     } else {
  //       this.user = null;
  //     }
  //   });
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 60px;
  width: 100vw;
  background: white;
  display: flex;
  flex-direction: row;

  .safa {
    padding: 0.5rem;
    margin: 0 2rem;
    font-size: 2rem;
  }

  div {
    padding: 0.5rem;
    margin: 0 0.5rem;
    margin-left: auto;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin-right: 1rem;
      text-decoration: none;
    }
  }
}
</style>
