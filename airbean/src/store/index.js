import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: {},
    cartList: [],
    totalPrice: 0,
    currentOrder:{},
    doneOrders: []
  },
  mutations: {
    saveMenu(state, data){
      state.menu = data.menu
    },
    storeItem(state, item) {
      // state.cartList.push(item)
      let index = state.cartList.findIndex(f => f.id == item.id)
      state.totalPrice += item.price

      if (index != -1) {
        state.cartList[index].counter++
        return
      }
      let stored = {id: item.id, title: item.title, price: item.price, counter: 1}
      state.cartList.push(stored)
      
    },

    changeAmount(state, data) {
      let tempIndex = state.cartList.findIndex(f => f.id == data[1])
      if(data[0] == "add"){
        state.cartList[tempIndex].counter++
        state.totalPrice += state.cartList[tempIndex].price
      }
      else if(data[0] == "remove"){
        state.cartList[tempIndex].counter--
        state.totalPrice -= state.cartList[tempIndex].price
        if(state.cartList[tempIndex].counter == 0){
          state.cartList.splice(tempIndex, 1)
        }
      }
    },

    finishOrder(state, data){
      let tempDate = new Date()
      let currentOrder = {eta: data.eta, orderNr: data.orderNr, totalPrice: state.totalPrice, date: `${tempDate.getFullYear()}/${(tempDate.getMonth()+1)}/${tempDate.getDate()}`}
      state.currentOrder = currentOrder
      state.doneOrders.push(currentOrder)
      
      let temp = localStorage.getItem('doneOrders')
      let tempOrders = [...JSON.parse(temp)]
      tempOrders.push(currentOrder)

      localStorage.setItem('doneOrders', JSON.stringify(tempOrders))
      state.cartList = []
      state.totalPrice = 0
    }
  },
  actions: {
    async getBeans(context){
      const req = await fetch('http://localhost:5000/api/beans')
      const body = await req.json()
      context.commit('saveMenu', body)
    },
    async order(context){
      let req = await fetch('http://localhost:5000/api/beans', {method: 'POST'})
      const body = await req.json()
      context.commit('finishOrder', body)
    }
  },
  modules: {
  }
})
