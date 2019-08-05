import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/signup",
      name: "Signup",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Signup.vue")
    },
    {
      path: "/user-land",
      name: "Signup",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/UserLanding.vue")
    },
    {
      path: "/contact-us",
      name: "ContactUs",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ContactUs.vue")
    }
  ]
});
