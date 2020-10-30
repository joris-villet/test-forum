<template>
<div>
  <nav>
    <ul>
      <li>
        <router-link to="/register">S'inscrire</router-link>
      </li>
      <li>
        <router-link to="/login">Se connecter</router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="css">
nav ul {
  padding: 0;
  display: flex;
  justify-content: flex-end;
}

nav ul li {
  list-style-type: none;
  margin-right: 1rem;
}
</style>
