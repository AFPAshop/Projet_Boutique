import axios from 'axios'
import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: [],
    categories: [],
    tva: [],
    cart: [],
    items: 0,
    url: 'http://localhost:5000/api'
  },
  mutations: {
    getProducts(state, products) {
      state.products = products
      console.log(state.products)
    },
    getCategories(state, categories) {
      state.categories = categories
      console.log(state.categories)
    },
    getTva(state, tva) {
      state.tva = tva
      console.log(state.tva)
    },
  },
  actions: {
    getProductsAction({
      commit
    }) {
      axios('https://fakestoreapi.com/products').then(res => {
        commit('getProducts', res.data)
      })
      // axios.get(state.url + '/products/getAll').then(res => {
      //   commit('getProducts', res.data)
      // })
    },
    getCategoriesAction({
      commit
    }) {
      axios.get(state.url + '/categories/getAll').then(res => {
        commit('getCategories', res.data)
      })
    },
    getTvaAction({
      commit
    }) {
      axios.get(state.url + '/tva/getAll').then(res => {
        commit('getTva', res.data)
      })
    },
  },
  modules: {}
})