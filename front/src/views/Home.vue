<template>
<div class="home">
  <div class="container">
    <nav-bar></nav-bar>

  </div>

</div>
</template>

<script>

// @ is an alias to /src
import NavBar from '../components/NavBar'

export default {
  name: 'Home',
  components: {
    'nav-bar': NavBar
  },

  methods: {
    
  }
}
</script>

<style lang="css">
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
