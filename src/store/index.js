import axios from 'axios'
import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: [],
    items: 0,
    url: 'http://localhost/3000/api'
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
      // axios.get('http://localhost:1337/api/products').then(res => {
      //   commit('getProducts', res.data)
      // })
    }
  },
  modules: {}
})