import Vue from 'vue'
import Vuex from 'vuex'

import Itemsjson from '@/store/Items.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    items: (state) => state.data,
    incomeAmount: (state) => {
      let sum = 0
      state.data.forEach(element => {
        if (element.type === "income") {
          let intPrice = parseInt(element.price)
          sum += intPrice;
        }
      });
      return sum
    },
    costsAmount: (state) => {
      let sum = 0
      state.data.forEach(element => {
        if (element.type === "costs") {
          let intPrice = parseInt(element.price)
          sum += intPrice;
        }
      });
      return sum
    },
    // list: (state) => {
    //   let labels = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    //   ];
    //   return labels
    // }too lazyyyyyyyyyyyyyyyyy for this part
  },
  mutations: {
    fetch(state, { res }) {
      state.data = res.data
    },
    add(state, { payload }) {
      state.data.push(payload)
    },
  },
  actions: {
    fetchItem({ commit }) {
      let res = {
        data: Itemsjson,
      }
      commit('fetch', { res })
    },
    addItem({ commit }, payload) {
      commit('add', { payload })
    },

  },
  modules: {}
})
