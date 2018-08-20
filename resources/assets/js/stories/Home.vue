<template>
    <div class="container is-fluid">
        <h1>Home</h1>

        <div v-if="token">
            <p>api_token: {{ token }} </p>
            <a @click="logout" class="button is-danger">Logout</a>
        </div>

    </div>
</template>

<script>
    import api from '@/api';

    export default {
        name: "Home",
        methods: {
            logout() {
                api.auth.logout();
            }
        },

        computed: {
            token () {
                return api.auth.token();
            }
        }
    }
</script>
