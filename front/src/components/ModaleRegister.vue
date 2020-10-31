<template>

  <div class="bloc-modale" v-if="revele">

    <div class="overlay"></div>

      <form class="modale" @submit.prevent="getFormRegister">
        <div class="close-modale" @click="toggleModale">fermer</div>
        <h2 class="title-modale">Inscription &#x1F447;</h2>
        <div>
          <label>
            <input v-model="firstname" type="text" name="firstname" placeholder="votre prénom" autocomplete="off">
          </label>
        </div>
        <div>
          <label>
            <input v-model="lastname" type="text" name="lastname" placeholder="votre nom" autocomplete="off">
          </label>
        </div>
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
        <div>
          <label>
            <input v-model="repeatPassword" type="password" name="repeatPassword" placeholder="confirmez le mot de passe" autocomplete="off">
          </label>
        </div>
        <button class="btn" type="submit">Validez</button>
        <p class="error-message" v-if="infoModale"> {{ message }} </p>
      </form>

  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'ModaleRegister',
   data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      repeatPassword: '',
      infoModale: false,
      message: '',
    }
  },
  props: ['toggleModale', 'revele'],

   methods: {
    getFormRegister: function() {
      
      axios.post('http://localhost:3000/api/user', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        repeatPassword: this.repeatPassword
      })
      .then(response => {
        console.log(response.data)
        this.revele = !this.revele
      })
      .catch(error => {
        console.log(error.response)
        this.infoModale = true;
        this.message = error.response.data;
      })
    },
  }
}
</script>

<style lang="css" scoped>

  .close-modale {
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
  }

  .title-modale {
    color: rgb(54, 194, 129);
  }
 
  input {
    display: block;
    margin: 0.8rem auto;
    padding-left: 0.5rem;
    height: 30px;
    outline: none;
    border: 1px solid rgb(208, 208, 208);
    border-radius: 5px;
    color: grey;
  }

  input:focus {
    border-color: rgb(54, 194, 129);
  }

  input::placeholder {
    color: rgb(54, 194, 129);
    font-style: italic;
  }

  .bloc-modale {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .modale {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 300px;
    height: 350px;
    background: #f1f1f1;
    border-radius: 5px;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
    padding: 3rem 5rem;
  } 

  .btn {
    background: rgb(54, 194, 129);
    margin: 0.5rem auto;
    padding: 0.5rem 1.5rem;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .error-message {
    max-width: 80%;
    margin: 0.5rem auto;
    color: red;
    padding: 1rem auto;
    font-size: 0.8rem;
  }
</style>
