import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    SET_COUNT(state, count) {
      state.count = count
    }
  },
  actions: {
  },
  modules: {
  }
})
