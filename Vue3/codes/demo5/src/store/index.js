import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user'

const state = {
  num: 0,
  dnum: 0,
  cartlist: [
    {name: 'JavaScript高级程序设计', price: 10},
    {name: 'JavaScript高级程序设计', price: 100},
    {name: 'JavaScript高级程序设计', price: 90},
    {name: 'JavaScript高级程序设计', price: 20},
    {name: 'JavaScript高级程序设计', price: 10},
    {name: 'JavaScript高级程序设计', price: 30},
    {name: 'JavaScript高级程序设计', price: 40},
    {name: 'JavaScript高级程序设计', price: 50},
  ]
}

export default createStore({
  state,
  getters,
  mutations: {
    cnum(state) {
      state.num  =99
    },
    sub(state) {
      state.dnum--
    },
    add(state) {
      state.dnum++
    },
    add2(state, count) {
      state.dnum += count
    },
    sub2(state, count) {
      state.dnum -= count
    },
    add3(state, {count, num}) {
      state.dnum += (count + num)
    },
    sub3(state, {count, num}) {
      state.dnum -= (count + num)
    },
    addGood(state, good) {
      state.cartlist.push(good)
    },
    setname(state, payload) {
      console.log('setname1')
      state.num = payload
    }
  },
  actions: {
    demo({state, commit, getters}, payload) {
      setTimeout(() => {
        // state.num = 99
        commit('cnum')
      }, 3000)
    },
    fun({state, commit, getters}) {

    }
  },
  modules: {
    user,
  }
})
