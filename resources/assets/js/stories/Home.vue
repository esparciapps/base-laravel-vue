<template>
    <div class="">
        <div class="flex justify-center items-center h-12 bg-red">
            <h2 class="text-white">Home</h2>
        </div>

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
