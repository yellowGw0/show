import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index/Index.vue');
const Design = () => import('@/views/design/Design.vue');
const Message = () => import('@/views/message/Message.vue');
const About = () => import('@/views/about/About.vue');
const Login = () => import('@/views/login/Login.vue');
const Register = () => import('@views/register/Register.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index,
  },
  {
    path: '/design', 
    component: Design
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
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