import { createStore } from 'vuex'

export default createStore({
  state: {
    num: 0,
    dnum: 0
  },
  mutations: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
