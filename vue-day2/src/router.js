import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import BlogDetail from "./views/BlogDetail.vue"
import BlogDetailFull from "./views/BlogDetailFull.vue"
import HomeHeader from './components/HomeHeader.vue'
import BlogHeader from './components/BlogHeader.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL, //relation guard
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: () => import(/* webpackChunkName: "Home" */ "./components/HomeHeader.vue"),
        body: () => import(/* webpackChunkName: "Home" */ "./views/Home.vue")
      }
    },
    {
      path: "/blog/:id",
      name: "blog-detail",
      components: {
        header: BlogHeader,
        body: BlogDetail
      }
    },
    {
      path: "/blog/:id/full",
      name: "blog-detail-full",
      components: {
        header: BlogHeader,
        body: BlogDetailFull
      }
    }
  ]
});
