// import router from '../../router';
// import firebase from '../../firebase/init';



// const state = {
//   user: {}
// };

// export const getters = {
//   user: state => state.user,
//   loggedIn: state => 'uid' in state.user
// };

// export const actions = {
//   fetchCreds({ commit }) {
//     firebase.auth().onAuthStateChanged(function (user) {
//       if (user) {
//         const { displayName, email } = user;
//         const cleanedUser = { displayName, email, password };
//         commit('setUser', cleanedUser);
//       } else {
//         commit('setUser', {});
//       }
//     });
//   }
// }

// export const mutations = {
//   setUser(state, payload) {
//     state.user = payload;
//   },
//   logIn() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithEmailAndPassword();
//   },
//   logOut() {
//     firebase.auth().signOut();
//   }
// };
// export default {
//   state,
//   getters,
//   mutations,
//   actions
// };
