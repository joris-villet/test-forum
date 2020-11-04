<template>
<div class="home">
  <div class="container">

    <nav-bar></nav-bar>

    <h1 class="title-main">Liste Forum</h1>

    <div class="header-forum">
      <div @click="createNewTopic" class="add-topic">
        <h2 class="title-newTopic">Créer un topic</h2>
        <i class="fas fa-edit new-topic-icon"></i>
      </div>
    </div>

    <transition name="fade">
      <div v-if="revele">
        <form class="form-new-topic">
          <div class="close-modale" @click="toggleModale">
            <i class="fas fa-window-close close-modale-icon"></i>
          </div>
          <div>
            <label for="title-topic">Titre du topic</label>
          </div>
          <div>
            <input type="text" id="title-topic" name="title-topic">
          </div>
          <div>
            <label for="message-topic">Votre message</label>
          </div>
          <div>
            <textarea type="text" id="message-topic" name="message-topic"></textarea>
          </div>
          <button class="btn" type="submit">Validez</button>
        </form>
      </div>
    </transition>

    <ul class="topics">
      <li v-for="(topic, index) in topics" :key="index">
        <todo-list
          :title="topic.title"
          :message="topic.message"
        >
        </todo-list>
      </li>
    </ul>
    

  </div><!-- fin container -->

</div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import NavBar from '../components/NavBar'
import TodoList from '../components/TodoList'

export default {
  name: 'Home',

  components: {
    'nav-bar': NavBar,
    'todo-list': TodoList
  },

  data(){
    return {
      revele: false,
      topics: []
    }
  },
  mounted() { 
    console.log(this.topics)
    this.getTopics()
  },

  methods: {
    
    createNewTopic: function(){
      this.revele = true
    },

    toggleModale: function(){
      this.revele = false
    },

    getTopics: function(){
      axios.get('http://localhost:3000/api/topic')
        .then(res => {
            res.data.forEach(item => {
           
              const topic = {
                title: item.title,
                message: item.message
              }

              this.topics.push(topic)
              
                
                // message: this.message.push(item.message)
              
            })
        })
        .catch(error => {
          console.log(error.response)
      })
    }
  }
}
</script>

<style>

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .title-main {
    color: rgb(139, 139, 139);
  }

  .topics {
    list-style-type: none;
    padding: 0;
  }

  .header-forum {
    background: rgb(238, 238, 238);
    border-top: 2px solid rgb(54, 194, 129);
    border-radius: 2px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    max-width: 100%;
    padding: 1rem;
  }

  .title-newTopic {
    margin: 0;
    font-size: 1rem;
    color: rgb(139, 139, 139);
  }

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

  .add-topic {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 15%;
    cursor: pointer;
  }

  .new-topic-icon {
    color: rgb(54, 194, 129);
  }

  .form-new-topic {
    position: relative;
    max-width: 100%;
    margin: 2rem auto;
    padding: 2rem;
    background: rgb(238, 238, 238);
    border-top: 2px solid rgb(54, 194, 129);
    border-radius: 2px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
  }

  #title-topic, #message-topic {
    display: block;
    width: 80%;
    margin: 0.5rem auto;
    padding-left: 0.5rem;
    height: 30px;
    outline: none;
    border: 1px solid rgb(208, 208, 208);
    border-radius: 5px;
    color: grey;
  }

  #message-topic {
    height: 100px;
  }

  #title-topic:focus, #message-topic:focus {
    border-color: rgb(54, 194, 129);
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

  label {
    font-size: 1rem;
    color: rgb(139, 139, 139);
    display: block;
    margin: 0 auto;
    width: 80%;
    text-align: left;
  }

  /* transition */
  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease-in-out;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
