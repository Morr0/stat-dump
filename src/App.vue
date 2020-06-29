<template>
  <div id="app">
      <form>
          <input v-model="currentSelected.y" type="text" placeholder="Dependent (y-axis)" required>
          <input v-model="currentSelected.x" type="text" placeholder="Independent (x-axis)" required>
          <select v-if="tables.length > 0">
              <option v-for="table in tables" :key="table.id" :value="table.id">
                  {{table.name}}
              </option>
          </select>
          <button type="button" @click.once.prevent="newTable">Create Table</button>
      </form>
  </div>
</template>

<script>

export default {
    name: 'App',
    components: {
        
    },
    data(){
        return {
            currentSelected: {},
        };
    },
    computed: {
        tables(){
            return this.$store.state.tables;
        }
    },
    methods: {
        newTable(){
            
        },
    }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
