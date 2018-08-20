<template>
    <div>
        <h1>User</h1>
        <p>{{ user }}</p>
    </div>
</template>

<script>
    import api from '@/api/api';

    export default {
        name: "User",
        data () {
            return {
                user: null,
            };
        },

        created() {
            this.user = api.auth.me();
        }
    }
</script>

<style scoped>

</style>