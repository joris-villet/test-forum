<template>
    <div class="bloc-todo">
        <h2 class="title">{{ title }}</h2>
        <p class="message">{{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        props: ['title', 'message'],
    }
</script>

<style scoped>
    .bloc-todo {
        background: rgb(238, 238, 238);
        border-top: 2px solid rgb(54, 194, 129);
        border-radius: 2px;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
        padding: 1rem;
        margin: 1rem auto;
    }

    .title {
        margin: 0rem 0 1rem 1rem;
        font-size: 1.3rem;
        text-align: left;
        color: rgb(139, 139, 139);
    }

    .message {
        margin: 1rem;
        font-size: 0.9rem;
        text-align: left;
        color: rgb(139, 139, 139);
    }
</style>
