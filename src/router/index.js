import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CardDetails from '../views/CardDetails.vue'
import admin from '../views/admin_boutique.vue'
import association from '../views/association.vue'
import commande from '../views/commande.vue'
import compteBoutique from '../views/compteBoutique.vue'
import compteClient from '../views/compteClient.vue'
import logout from '../views/logout.vue'
import produits from '../views/produits.vue'
import stock from '../views/stock.vue'
import tva from '../views/tva.vue'

const routes = [
  {
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
    path: '/cardDetails',
    name: 'CardDetails',
    component: CardDetails
  },
  {
    path: '/admin',
    name: 'admin',
    component : admin
  },
  {
    path: '/admin/association',
    name: 'association',
    component : association
  },
  {
    path: '/admin/commande',
    name: 'commande',
    component : commande
  },
  {
    path: '/admin/compteBoutique',
    name: 'compteBoutique',
    component : compteBoutique
  },
  {
    path: '/admin/compteClient',
    name: 'compteClient',
    component : compteClient
  },
  {
    path: '/admin/logout',
    name: 'logout',
    component : logout
  },
  {
    path: '/admin/produits',
    name: 'produits',
    component : produits
  },
  {
    path: '/admin/stock',
    name: 'stock',
    component : stock
  },
  {
    path: '/admin/tva',
    name: 'tva',
    component : tva
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
