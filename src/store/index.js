import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgheight:"",
    isfixed:false,
  },
  mutations: {
    issrue(state,data){
      state.isfixed=data
    }
  },
  actions: {
  },
  modules: {
  }
})
