<template>
  <nav class="header">
      <router-link :to="{ name: 'Home' }" class="safa">SAFA RAYANEH</router-link>
      <ul>
        <li>
          <router-link :to="{ name: 'Signup' }">Signup</router-link>
        </li> 
        <li>
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </li> 
        <li>
          <router-link :to="{ name: 'About' }">About</router-link>
        </li> 
      </ul>
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
  justify-content: center;
  align-items: center;

  .safa {
    position: absolute;
    left: 2rem;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: .2rem;
    color: rgb(2, 41, 59);

    &:hover {
      color: rgb(3, 127, 184);
    }
  }
  ul {
    display: flex;
    margin-left: auto;
    margin-right: 2rem;
    li {
      margin: 0 1rem;
      font-size: 1.2rem;
      padding: .5rem .8rem;
      transition: all .2s ease-in;
      &:hover {
        color: white;
        background: rgb(3, 127, 184);
      }
    }
  }

//   .safa {
//     padding: 0.5rem;
//     margin: 0 2rem;
//     letter-spacing: .2rem;
//     font-size: 2rem;
//     font-weight: 200;
//     background: transparent;
//     color: rgb(3, 3, 29);
//     &:hover {
//       color: rgb(20, 187, 76);
//     }
//   }
// //  class="bg-transparent text-blue-900 font-normal hover:text-red-400 py-2 px-4"
//   div {
//     padding: 0.5rem;
//     margin: 0 0.5rem;
//     margin-left: auto;
//     font-size: 1.5rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     a {
//       margin-right: 1rem;
//       text-decoration: none;
//     }
//   }
}
</style>
