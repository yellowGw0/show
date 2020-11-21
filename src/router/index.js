import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index/Index.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router