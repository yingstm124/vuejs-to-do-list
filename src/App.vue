<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
  #app {
    font-family: 'Karla', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    line-height: 1.4;
  }
</style>
