<template>
  <div>
    <nav>
      <ul>
        <li @click="openModalRegister">
          S'inscrire
        </li>
        <li v-if="admin">
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
      :firstname="firstname"
      :lastname="lastname" 
      :email="email" 
      :password="password"
      :repeatPassword="repeatPassword"
      :revele="revele"
      @closeModalRegister="closeModalRegister"
    />


    <!-- ici ma modale de connexion -->
    <ModaleLogin
      :email="email" 
      :password="password"
      :seen="seen"
      @closeModalLogin="closeModalLogin"
    />
  
    
  </div>
</template>

<script>
import ModaleRegister from '../components/ModaleRegister'
import ModaleLogin from '../components/ModaleLogin'

export default {
  name: 'NavBar',
  components: { ModaleRegister, ModaleLogin },
  data() {
    return {
      admin: false,
      revele: false,
      seen: false
    }
  },
  props: {
    getFormRegister: Function,
    getFormLogin: Function,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    repeatPassword: String,
  },

  methods: {
    openModalRegister: function() {
      this.revele = true;
    },
    closeModalRegister: function(){
      this.revele = false;
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
