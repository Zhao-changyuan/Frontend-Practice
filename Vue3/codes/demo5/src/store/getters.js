
export default {
  vxnum(state) {
    return state.num * state.num
  },
  totalprice(state) {
    return state.cartlist.reduce((s, n) => {
      return s + n.price
    }, 0)
  },
  goodsgt(state) {
    return state.cartlist.filter(item => item.price > 30)
  },
  goodsself(state) {
    return (price = 30) => {
      return state.cartlist.filter(item => item.price > price)
    }
  },
  goodsgtTotalPrice(state, getters) {
    return getters.goodsgt.reduce((s, n) => (s + n.price), 0)
  },
}