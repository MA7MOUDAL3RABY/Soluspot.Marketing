import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Blog from "./views/Blog.vue";
import ContactUs from "./views/ContactUs.vue";
import i18n from "./i18n";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: "/:lang",
      component: {
        render(c) {
          return c("router-view")
        }
      },
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "about",
          name: "about",
          component: About,
        },
        {
          path: "Services",
          name: "Services",
          component: Services,
        },
        {
          path: "Blog",
          name: "Blog",
          component: Blog,
        },
        {
          path: "ContactUs",
          name: "ContactUs",
          component: ContactUs,
        },
      ],
    },
  ]
});
