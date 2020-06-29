import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      tables: []
  },
  mutations: {
      newTable(state, table){
          state.tables.push(table);
      },
      newEntry(state, {index, entry}){
          state.tables[index].entry.push(entry);
      }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState(),
  ]
})
