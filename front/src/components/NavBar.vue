<template>
<div>
  <nav>
    <ul>
      <li @click="toggleModale">
        S'inscrire
      </li>
      <li v-if="admin">
        Se déconnecter
      </li>
      <li v-else>
        Se connecter
      </li>
    </ul>
  </nav>

  <!-- ici ma modale -->
  <modale-register
    :getFormRegister="getFormRegister"
    :firstname="firstname"
    :lastname="lastname" 
    :email="email" 
    :password="password"
    :repeatPassword="repeatPassword"
    :revele="revele"
    :toggleModale="toggleModale"
  >
  </modale-register> 





</div>
</template>

<script>
import ModaleRegister from '../components/ModaleRegister'

export default {
  name: 'NavBar',
  components: {
    'modale-register': ModaleRegister
  },
  data() {
    return {
      admin: false,
      revele: false
    }
  },
  props: {
    getFormRegister: Function,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    repeatPassword: String,
  },

  methods: {

    toggleModale: function(){
      this.revele = !this.revele;
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
