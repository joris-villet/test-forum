<template>
<div>
  <nav>
    <ul>
      <li @click="toggleModaleRegister">
        S'inscrire
      </li>
      <li v-if="admin">
        Se déconnecter
      </li>
      <li v-else @click="toggleModale">
        Se connecter
      </li>
    </ul>
  </nav>

  <!-- ici ma modale d'inscription -->
  <modale-register
    :getFormRegister="getFormRegister"
    :firstname="firstname"
    :lastname="lastname" 
    :email="email" 
    :password="password"
    :repeatPassword="repeatPassword"
    :revele="revele"
    :toggleModaleRegister="toggleModaleRegister"
  >
  </modale-register> 

  <!-- ici ma modale de connexion -->
   <modale-login
    :getFormLogin="getFormLogin"
    :email="email" 
    :password="password"
    :seen="seen"
    :toggleModale="toggleModale"
    >
  </modale-login> 





</div>
</template>

<script>
import ModaleRegister from '../components/ModaleRegister'
import ModaleLogin from '../components/ModaleLogin'

export default {
  name: 'NavBar',
  components: {
    'modale-register': ModaleRegister,
    'modale-login': ModaleLogin
  },
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

    toggleModaleRegister: function(){
      this.revele = !this.revele;
    },

    toggleModale: function(){
      this.seen = !this.seen;
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
