<template>
  <div id="app">
      <form>
          <input v-model="currentSelected.name" type="text" placeholder="Table name" required>
          <input v-model="currentSelected.x" type="text" placeholder="Independent (x-axis)" required>
          <input v-model="currentSelected.y" type="text" placeholder="Dependent (y-axis)" required>
          <select ref="comboBox" v-if="tables.length > 0" @change="selectedTable">
              <option value="choose">Choose a table</option>
              <option v-for="table in tables" :key="table.id" :value="table.id">
                  {{table.name}}
              </option>
          </select>
          <button type="button" @click.prevent="newTable">Create Table</button>
          <br>
          <div v-if="selectedIndex !== -1">
              <span>Add an entry</span>
              <input type="text" v-model="newEntry.x" placeholder="X">
              <input type="text" v-model="newEntry.y" placeholder="Y">
              <button type="button" @click.prevent="addEntry">Add Entry</button>
          </div>
      </form>
      <!-- <Grid v-if="currentSelected" :cols="[currentSelected.x, currentSelected.y]" :rows="[currentSelected.dataX, currentSelected.dataY]" /> -->
        <br>
        <br>
        <br>
        <div v-if="selectedIndex !== -1">
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
  </div>
</template>

<script>
const _table = {
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
            selectedIndex: -1,
            currentSelected: _table,
            newEntry: {}, // Consists of x and y
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
        addEntry(){
            if (this.selectedIndex !== -1){
                // this.currentSelected.entry.push(this.newEntry);
                this.$store.commit("newEntry", {
                    index: this.selectedIndex,
                    entry: this.newEntry,
                });
                this.newEntry = {};

            }
        },
        selectedTable(){
            const index = this.$refs.comboBox.selectedIndex;
            if (index > 0){ // To only select dynamic options
                this.currentSelected = this.tables[index - 1];
                this.selectedIndex = index - 1;
            } else { // To empty the fields
                this.selectedIndex = -1;
                this.currentSelected = _table;
                this.newEntry = {};
            }
        }
    },
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
