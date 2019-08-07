import Vue from "vue";
import Router from "vue-router";
import firebase from 'firebase';
import Home from "./views/Home/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      // this generates a separate chunk (about.[hash].js) for this route
      meta: {
        requireAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About/About.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login/Login.vue")
    },
    {
      path: "/signup",
      name: "Signup",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Signup/Signup.vue")
    },
    {
      path: "/userland",
      name: "UserLanding",
      meta: {
        requireAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/UserLanding/UserLanding.vue"),
    },
    {
      path: "/contact-us",
      name: "ContactUs",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ContactUs/ContactUs.vue"),

    }
  ]
});
