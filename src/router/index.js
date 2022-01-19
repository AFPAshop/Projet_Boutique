import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CartDetails from '../views/CartDetails.vue'
import test from '../views/test.vue'
import SignUp from '../views/SignUp.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/cartDetails',
    name: 'CartDetails',
    component: CartDetails
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router