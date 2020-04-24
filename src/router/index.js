import Vue from 'vue'
import VueRouter from 'vue-router'



import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Signup from '../views/Signup.vue'
import landing from '../views/landing.vue'
import Basket from '../views/Basket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product_details/:id/',
    name: 'ProductDetailId',
    component: ProductDetail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/landing',
    name: 'landing',
    component: landing
  },
  {
    path: '/tum_bilgisayarlar',
    name: 'tum_bilgisayarlar',
    component: Products
  }
  ,
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
