<template>

<transition name="fade">
  <div class="bloc-modale" v-if="showModalRegister">

    <div class="overlay"></div>

      <form class="modale">
        <div class="close-modale" @click="$emit('close-modal-register', $event.target)">
          <i class="fas fa-window-close close-modale-icon"></i>
        </div>
        <h2 class="title-modale">&#x1F447; Inscription</h2>
        <div>
          <label>
            <input v-model="formData.firstname" type="text" name="firstname" placeholder="votre prénom" autocomplete="off">
          </label>
        </div>
        <div>
          <label>
            <input v-model="formData.lastname" type="text" name="lastname" placeholder="votre nom" autocomplete="off">
          </label>
        </div>
        <div>
          <label>
            <input v-model="formData.email" type="text" name="email" placeholder="votre email" autocomplete="off">
          </label>
        </div>
        <div>
          <label>
            <input v-model="formData.password" type="password" name="password" placeholder="votre mot de passe" autocomplete="off">
          </label>
        </div>
        <div>
          <label>
            <input v-model="formData.repeatPassword" type="password" name="repeatPassword" placeholder="confirmez le mot de passe" autocomplete="off">
          </label>
        </div>
        <button @click.prevent="submitFormRegister" class="btn" type="submit">Validez</button>
        <p class="error-message" v-if="infoModale"> {{ message }} </p>
      </form>

  </div>
</transition>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'ModaleRegister',
  props: {
    showModalRegister: Boolean
  },
  data() {
    return {
      formData: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeatPassword: '',
      },
      infoModale: false,
      message: '',
    }
  },
   methods: {
     submitFormRegister: async function() {
       

        try {
          const res = await axios.post('http://localhost:3000/api/user', this.formData);
          const data = await res.data;
          console.log(data)
          this.firstname = '';
          this.lastname =  '';
          this.email = '';
          this.password =  '';
          this.repeatPassword =  '';
          this.$emit('close-modal-register');
          this.infoModale = false;
          this.formData = {}
        }
        catch (err) {
          console.log("je suis dans le catch");
          console.log(err.response.data);
          this.infoModale = true;
          this.message = err.response.data;
        }
     }
  }
}
</script>

<style scoped>

  .close-modale {
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
  }

  .close-modale-icon {
    color: rgb(255, 80, 80);
    font-size: 1.5rem;
  }

  .title-modale {
    color: rgb(54, 194, 129);
  }

  label {
    margin: 0;
  }
 
  input {
    display: block;
    margin: 0.8rem auto;
    padding: 1rem 0rem 0 0.5rem;
    width: 250px;
    height: auto;
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
    z-index: 2;
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
    width: auto;
    height: auto;
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

   /* transition */
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease-in-out;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
