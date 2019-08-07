import qs from 'qs';
import firebase from 'firebase/app';
import db from '../../firebase/init';
import router from '../../router';


const state = {
  username: '',
  password: '',
  email: '',
  token: window.localStorage.getItem()
};

const getters = {
  //show falsy value false and vice versa
  isLoggedIn: state => !!state.token
};
//can make actions more complicate to make other 3 simple
//setToken update token in state
const actions = {
  login: () => {
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
    
  },
  // first param in any action pass is obj that has some helpers tight to it 
  // window.location.hash come from authHandler.vue
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#',''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  },
  //to call mutations we use commit function
  //first param is object with some helpers allow us modify us module
  logout: ({ commit }) =>{ 
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  }
};

const mutations = {
  //second arg provide by action guys
  setToken: (state, token) => state.token = token
};


export default  {
  state,
  getters,
  actions,
  mutations
};