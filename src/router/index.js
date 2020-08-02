import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from "./movie"
import info from "./info"
import cinema from "./cinema"
import center from "./center"
import nowplayinginfo from './nowplayinginfo'
import space from './space'
import cinemainfo from "./cinemainfo"
import login from "./login"
Vue.use(VueRouter)

  const routes = [
    movie,
    info,
    cinema,
    center,
    nowplayinginfo,
    space,
    cinemainfo,
    login,
    {
      path:"/*",
      redirect:"/movie"
    }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
export default router
