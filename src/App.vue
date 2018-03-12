<template>
  <div id="app">
    <img src="./assets/logoTag.png">
    <router-view/>
    <router-link to='/passage' class="boutton" >Prochain passage</router-link>
    <router-link to='/destination' class="boutton" >Destination</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
