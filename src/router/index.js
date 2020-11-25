import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index/Index.vue');
const Design = () => import('@/views/design/Design.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: 'design', 
        component: Design
      }
    ]
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