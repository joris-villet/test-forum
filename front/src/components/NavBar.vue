<template>
  <div>
    <nav>
      <ul>
        <li @click="openModalRegister">
          S'inscrire
        </li>
        <li v-if="isLogged" @click="logout">
          Se déconnecter
        </li>
        <li v-else @click="openModalLogin">
          Se connecter
        </li>
      </ul>
    </nav>

    <!-- ici ma modale d'inscription -->
    <ModaleRegister
      :getFormRegister="getFormRegister"
      :showModalRegister="showModalRegister"
      @close-modal-register="closeModalRegister"
    />


    <!-- ici ma modale de connexion -->
    <ModaleLogin
      :seen="seen"
      :email="email" 
      :password="password"
      @close-modal-login="closeModalLogin"
    />
  
    
  </div>
</template>

<script>
import axios from 'axios'

import ModaleRegister from '../components/ModaleRegister'
import ModaleLogin from '../components/ModaleLogin'

export default {
  name: 'NavBar',
  components: { ModaleRegister, ModaleLogin },
  props: {
    getFormRegister: Function,
    getFormLogin: Function,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    repeatPassword: String,
  },
  data() {
    return {
      isLogged: false,
      showModalRegister: false,
      seen: false
    }
  },
  updated() {
    console.log('updated')
    this.checkCookie();
  },
  methods: {
    checkCookie: async function() {
      try {
        const res = await axios.get('http://localhost:3000/api/auth-require');
        const data = res.data;
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    },
    logout: async function() {
      try {
        const res = await axios.get('http://localhost:3000/api/logout');
        const data = await res.data;
        console.log(data);
        this.isLogged = false;
      }
      catch (err) {
        console.log("je suis dans le catch")
        console.log(err);
      }
    },
    openModalRegister: function() {
      this.showModalRegister = true;
    },
    closeModalRegister: function(){
      this.showModalRegister = false;
    },
    openModalLogin: function() {
      this.seen = true;
    },
    closeModalLogin: function() {
      this.seen = false;
    },
  },
}
</script>

<style lang="css">
nav ul {
  margin: 3rem 0 0 0;
  display: flex;
  justify-content: flex-end;
  color: rgb(54, 194, 129);
}

nav ul li {
  list-style-type: none;
  margin-right: 1rem;
  cursor: pointer;
}
</style>
