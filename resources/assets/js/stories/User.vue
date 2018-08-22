<template>
    <div>
        <h1>User</h1>
        <router-link :to="{ name: 'login' }">Login</router-link>
        <router-link :to="{ name: 'home' }">Home</router-link>

        <p>{{ user }}</p>
        <button @click="ping">Ping</button>
    </div>
</template>

<script>
    import api from '@/api';

    export default {
        name: "User",
        computed: {
            user () {
                return api.auth.user();
            }
        },
        methods: {
            async ping () {
                const response = await api.ping();
                console.log(response.data);
            }
        }
    }
</script>

<style scoped>

</style>
