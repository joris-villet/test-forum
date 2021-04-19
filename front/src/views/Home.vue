<template>
  <div class="home">
    <div class="container">
      <NavBar />
      <div class="profil">
        <div v-if="profilActived">

        </div>
      </div>
      <h1 class="title-main">Liste Forum</h1>

      <div class="header-forum">
        <div @click="openFormTopic" class="add-topic">
          <h2 class="title-newTopic">Créer un topic</h2>
          <i class="fas fa-edit new-topic-icon"></i>
        </div>
      </div>

      <transition name="fade">
        <div v-if="revele">
          <form class="form-new-topic">
            <div class="close-modale" @click="closeFormTopic">
              <i class="fas fa-window-close close-modale-icon"></i>
            </div>
            <div>
              <label for="title-topic">Titre du topic: {{ titleVoid }}</label>
            </div>
            <div>
              <input v-model="titleTopic" type="text" id="title-topic" name="title-topic">
            </div>
            <div>
              <label for="message-topic">Votre message: {{ messageVoid }}</label>
            </div>
            <div>
              <textarea v-model="messageTopic" type="text" id="message-topic" name="message-topic"></textarea>
            </div>
            <button @click.prevent="submitTopic" class="btn" type="submit">Validez</button>
          </form>
        </div>
      </transition>

      <div class="container-todo">
        <TodoList
          v-for="(topic, index) in topics" :key="index"
          :createdAt="topic.createdAt"
          :title="topic.title"
          :message="topic.message"
        />
      </div>

    </div><!-- fin container -->
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar'
import TodoList from '@/components/TodoList'

export default {
  name: 'Home',
  components: { NavBar, TodoList },
  data() {
    return {
      profilActived: true,
      revele: false,
      titleTopic: '',
      messageTopic: '',
      titleVoid: '',
      messageVoid: '',
      topics: []
    }
  },
  created() {
    this.getTopics();
  },
  methods: {
    openFormTopic: function() {
      this.revele = true;
    },
    closeFormTopic: function() {
      this.revele = false;
    },
    submitTopic: async function() {

      if (this.titleTopic === '') {
        this.titleVoid = 'Veuillez entrer un titre';
        return;
      }
      if (this.messageTopic === '') {
        this.messageVoid = 'Veuillez entre un message';
        return;
      }

      const newTopic = {
        title: this.titleTopic,
        message: this.messageTopic
      };

      try {
        const res = await axios.post('http://localhost:3000/api/topic', newTopic);
        const data = await res.data;
        console.log(data);
        this.topics.unshift(data)
      }
      catch (err) {
        console.log(err)
      }

      this.titleTopic = '';
      this.messageTopic = '';
      this.titleVoid = '',
      this.revele = false;

    },
    getTopics: async function() {
      try {
        const res = await axios.get('http://localhost:3000/api/topic');
        const data = await res.data;
        console.log(data);
        this.topics = data;
      }
      catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .container-todo {
    margin: 1rem auto;
    transition: .5s ease-in-out;
  }

  .title-main {
    color: rgb(139, 139, 139);
  }

  .header-forum {
    background: rgb(238, 238, 238);
    border-top: 2px solid rgb(54, 194, 129);
    border-radius: 2px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    max-width: 100%;
    padding: 1rem;
    position: relative;
    z-index: 1;
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
    justify-content: space-between;
    align-items: center;
    width: 140px;
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
    z-index: 0;
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
    transform: translateY(-89px);
  }

</style>
