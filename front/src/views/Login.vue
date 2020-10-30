<template>
<div class="about">
  <div class="container">
    <nav-bar></nav-bar>
    <h1>Connectez-vous</h1>

    <login-form 
      :getFormRegister="getFormRegister"
      :email="email" 
      :password="password"
      >
    </login-form> 

 

  </div>
</div>
</template>


<script>
// import axios from 'axios'

import NavBar from '../components/NavBar'
import LoginForm from '../components/LoginForm'

export default {
  name: 'Login',
  components: {
    'nav-bar': NavBar,
    'login-form': LoginForm
  },
    props: {
    getFormRegister: Function,
    email: String,
    password: String,
  },

}
</script>



<style lang="css" scoped>

</style>



