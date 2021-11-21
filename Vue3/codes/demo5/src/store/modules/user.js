
export default {
  state: {
    name: 'lmonkey',
    slogen: 'ok'
  },
  getters: {
    fullname(state) {
      return state.name + "-" + state.slogen;
    },
    fullname2(state, getters, rootState, rootGetters) {
      return getters.fullname + rootGetters.vxnum
    },
    fullname3(state, getters, rootState, rootGetters) {
      return getters.fullname2 + rootGetters.vxnum
    }
  },
  mutations: {
    setname(state, payload) {
      console.log('user setname')
      state.name = payload
    }
  },
  actions: {
    dosome({dispatch, state, commit, getters, rootGetters}) {
      setTimeout(() => {
        commit('setname', '张飞')
      }, 2000)
    }
  },
  namespaced: true,
}