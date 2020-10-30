<template>
<div class="about">
  <div class="container">
    <nav-bar></nav-bar>
    <h1>Inscription au forum</h1>

    <user-form 
      :getFormRegister="getFormRegister"
      :firstname="firstname"
      :lastname="lastname" 
      :email="email" 
      :password="password"
      :repeatPassword="repeatPassword"
    >
    </user-form> 

 

  </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar'
import UserForm from '../components/UserForm'

export default {
  name: 'Register',
  components: {
    'nav-bar': NavBar,
    'user-form': UserForm
  },
  props: {
    getFormRegister: Function,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    repeatPassword: String
  },
}
</script>

<style lang="css">
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
