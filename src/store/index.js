import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      tables: []
  },
  mutations: {
      newTable(state, table){
          state.tables.push(table);
      }
  },
  actions: {
  },
  modules: {
  }
})
