import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CartDetails from '../views/CartDetails.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router