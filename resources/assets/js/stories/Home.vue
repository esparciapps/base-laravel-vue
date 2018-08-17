<template>
    <div>
        <h1>Home</h1>

        <div v-if="token">
            <p>api_token: {{ token }} </p>
            <a @click="logout" class="button is-danger">Logout</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                token: null
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('api_token');
                this.token = null;
                this.$router.push('login');
            }
        },

        created() {
            this.token = localStorage.getItem('api_token');
        }
    }
</script>
