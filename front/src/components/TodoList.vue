<template>
    <div class="bloc-todo">
        <h5 class="text-sm italic text-gray-400 text-left">Posté le: {{ createdAt }}</h5>
        <h2 class="title">{{ title }}</h2>
        <p class="message">{{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        props: {
            title: String,
            message: String,
            createdAt: String
        }
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
        margin: 0;
        font-size: 1.3rem;
        text-align: left;
        color: rgb(139, 139, 139);
    }

    .message {
        margin: 1rem auto;
        font-size: 0.9rem;
        text-align: left;
        color: rgb(139, 139, 139);
    }
</style>
