import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: {},
    cartList: []
  },
  mutations: {
    saveMenu(state, data){
      state.menu = data.menu
    },
    storeItem(state, item) {
      // state.cartList.push(item)
      let index = state.cartList.findIndex(f => f.id == item.id)
      if (index != -1) {
        state.cartList[index].counter++
        return
      }
      let stored = {id: item.id, title: item.title, price: item.price, counter: 1}
      state.cartList.push(stored)

      console.log("storeItem: " + item)
      console.log("cartList: " + state.cartList)
    },
    changeAmount(state, action, data) {
      console.log("changeAmount: ", action + " " + data)
    }
  },
  actions: {
    async getBeans(context){
      const req = await fetch('http://localhost:5000/api/beans')
      const body = await req.json()
      context.commit('saveMenu', body)
    }
  },
  modules: {
  }
})
