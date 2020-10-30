<template>
<div>
  <form @submit.prevent="getFormRegister">
    <div>
      <label>
        <input v-model="email" type="text" name="email" placeholder="votre email" autocomplete="off">
      </label>
    </div>
    <div>
      <label>
        <input v-model="password" type="password" name="password" placeholder="votre mot de passe" autocomplete="off">
      </label>
    </div>
    <button id="btn" type="submit">Validez</button>
    <p v-if="infoPage"> {{ message }} </p>
  </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginForm',
   data() {
    return {
      email: '',
      password: '',
      infoPage: false,
      message: ''
    }
  },

   methods: {
    getFormRegister() {
     
      axios.post('http://localhost:3000/api/login', {
        email: this.email,
        password: this.password,
      })
      .then(response => {
        this.infoPage = true
        this.message = response.data
        setTimeout(() => {
          this.$router.push('/')
        },3000)
      })
      .catch(error => {
        console.log(error.response)
        this.infoPage = true;
        this.message = error.response.data;
      })
      
    }
  }
}
</script>

<style lang="css" scoped>
  input {
    display: block;
    margin: 0.8rem auto;
  }
</style>
