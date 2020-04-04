import Vue from 'vue'
import VueRouter from 'vue-router'



import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product_details',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tum_bilgisayarlar',
    name: 'Products',
    component: Products
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
