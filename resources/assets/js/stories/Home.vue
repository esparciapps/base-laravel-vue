<template>
    <div class="w-full h-full bg-grey-lightest">
        <Navigation />

        <div class="container mx-auto px-4 py-2 overflow-y-scroll">
            <div v-if="token">
                <p>api_token: {{ token }} </p>
                <button @click="logout" class="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow">Logout</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from '@/layout/Navigation';
    import api from '@/api';

    export default {
        name: 'Home',
        components: { Navigation },
        methods: {
            logout() {
                api.auth.logout();
            }
        },
        computed: {
            token () {
                return api.auth.token;
            }
        }
    }
</script>
