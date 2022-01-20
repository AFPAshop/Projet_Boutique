import axios from 'axios'
import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: [],
    items: 0
  },
  mutations: {
    getProducts(state, products) {
      state.products = products
      console.log(state.products)
    },
  },
  actions: {
    getProductsAction({
      commit
    }) {
      axios('https://fakestoreapi.com/products').then(res => {
        commit('getProducts', res.data)
      })
    }
  },
  modules: {}
})