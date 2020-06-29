<template>
  <div id="app">
      <form>
          <input v-model="currentSelected.name" type="text" placeholder="Table name" required>
          <input v-model="currentSelected.x" type="text" placeholder="Independent (x-axis)" required>
          <input v-model="currentSelected.y" type="text" placeholder="Dependent (y-axis)" required>
          <select v-if="tables.length > 0">
              <option v-for="table in tables" :key="table.id" :value="table.id">
                  {{table.name}}
              </option>
          </select>
          <button type="button" @click.prevent="newTable">Create Table</button>
      </form>
      <!-- <Grid v-if="currentSelected" :cols="[currentSelected.x, currentSelected.y]" :rows="[currentSelected.dataX, currentSelected.dataY]" /> -->
        <br>
        <br>
        <br>
        <h2>{{currentSelected.name}}</h2>
        <table>
            <tr>
                <th>{{currentSelected.x}}</th>
                <th>{{currentSelected.y}}</th>
            </tr>
            <tr v-for="entry in currentSelected.entry" :key="entry.x + entry.y">
                <td>{{entry.x}}</td>
                <td>{{entry.y}}</td>
            </tr>
        </table>
  </div>
</template>

<script>
const table = {
    id: "",
    name: "",
    x: "",
    y: "",
    entry: [] // Each entry is {x, y}
}

import {v1} from "uuid";

export default {
    name: 'App',
    components: {
    },
    data(){
        return {
            currentSelected: table,
        };
    },
    computed: {
        tables(){
            return this.$store.state.tables;
        }
    },
    methods: {
        newTable(){
            this.currentSelected.id = v1();
            this.currentSelected.data = [];
            this.$store.commit("newTable", this.currentSelected);
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
