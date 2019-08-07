import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import firebase from 'firebase'
// import Axios from 'axios'
// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }
Vue.config.productionTip = false;

let app = null
firebase.auth().onAuthStateChanged(() => {
  /* eslint-disable no-new */
  // init app if not already created
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})