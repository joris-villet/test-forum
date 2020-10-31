<template>
<div class="about">
  <div class="container">
    <nav-bar></nav-bar>
    <h1>Inscription au forum</h1>

 

  </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar'


export default {
  name: 'Register',
  components: {
    'nav-bar': NavBar,

  },

}
</script>

<style lang="css">
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
