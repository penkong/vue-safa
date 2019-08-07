import Vue from "vue";
import Router from "vue-router";
import firebase from 'firebase/app';
import Home from "./views/Home/Home.vue";

Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/aboutforCustomer",
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
      path: "/contactus",
      name: "ContactUs",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ContactUs/ContactUs.vue")
    }
  ]
});

// going to
// come from
// step next
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requireAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      next()
    } else {
      // redirect
      next({ name: 'Home' })
    }
  } else {
    // else it had not router guard.
    next()
  }
})

export default router;