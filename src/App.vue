<template>
  <div id="app">
    <Movies/>
  </div>
</template>

<script>
import Movies from './components/Movies.vue'

export default {
  name: 'app',
  components: {
    Movies
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

ul {
  margin: 0;
  li {
    list-style: none;
  }
}
a {
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
}
</style>
