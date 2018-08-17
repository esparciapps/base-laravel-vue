<template>
    <div>
        <h1>Home</h1>
        <p v-show="token">api_token: {{ token }} </p>
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
        created() {
            this.token = localStorage.getItem('api_token');
        }
    }
</script>
