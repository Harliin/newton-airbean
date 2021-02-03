import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: {}
  },
  mutations: {
    saveMenu(state, data){
      state.menu = data.menu
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
