<template>
    <div>
        <h1>User</h1>
        <p>{{ user }}</p>
        <button @click="ping">Ping</button>
    </div>
</template>

<script>
    import api from '@/api/api';

    export default {
        name: "User",
        computed: {
            user () {
                return api.auth.user;
            }
        },
        methods: {
            ping () {
                const response = api.ping();
            }
        }
    }
</script>

<style scoped>

</style>