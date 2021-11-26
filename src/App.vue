<script setup>
import HelloWorld from '/@/components/HelloWorld.vue'
import {getSuiJiJokes} from '/@/services/jokes/index.js'

const {result: res} = await getSuiJiJokes()
console.log(res)
</script>

<template>
  <HelloWorld/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  /* background-color: $background-color; */
}
</style>
