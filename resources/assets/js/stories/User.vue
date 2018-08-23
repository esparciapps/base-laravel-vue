<template>
    <div class="w-full h-full bg-grey-lightest">
        <nav class="bg-grey-darkest">
            <div class="container mx-auto px-4 py-2 flex items-center justify-between flex-wrap ">
                <div class="flex items-center flex-no-shrink text-white mr-6">
                    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span class="font-semibold text-xl tracking-tight">LevelApp</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-grey-lighter border-grey-light hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <router-link
                            :to="{ name: 'home' }"
                            tag="button"
                            class="no-underline block mt-4 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4">
                            Home
                        </router-link>
                        <router-link
                            :to="{ name: 'me' }"
                            tag="button"
                            class="no-underline block mt-4 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4">
                            User
                        </router-link>
                    </div>
                    <div>
                        <router-link
                            :to="{ name: 'login' }"
                            tag="button"
                            class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
                            Login
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container mx-auto px-4 py-2 overflow-y-scroll">
            <p>{{ user }}</p>
            <button class="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow" @click="ping">Ping</button>
        </div>
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
