<template>
    <div class="flex flex-col w-full h-full bg-grey-lightest">
        <Navigation />

        <div class="w-full flex-1 overflow-y-scroll">
            <div class="container mx-auto max-w-sm px-4 py-8 overflow-y-scroll">
                <form class="mb-8" @submit.prevent="updateProfile">
                    <div class="mb-4">
                        <h2 class="font-normal text-grey-darkest">Profile</h2>
                        <hr class="h-px bg-grey-light">
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
                    </div>
                    <div class="mb-6">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
                        <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
                    </div>
                    <div class="">
                        <button class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Update profile
                        </button>
                    </div>
                </form>
                
                <form class="" @submit.prevent="updatePassword">
                    <div class="mb-4">
                        <h2 class="font-normal text-grey-darkest">Change password</h2>
                        <hr class="h-px bg-grey-light">
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                            Old password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="old-password" type="password" placeholder="********">
                    </div>
                    <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                            New password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********">
                    </div>
                    <div class="mb-6">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                            New password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password-confirmation" type="password" placeholder="********">
                        <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-grey-light hover:bg-grey-light-dark text-grey-darkest font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Update password
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            I forgot my password
                        </a>
                    </div>
                </form>
            
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from '@/layout/Navigation';
    import api from '@/api';

    export default {
        name: "User",
        components: { Navigation },
        data () {
            return {
                profileForm: {
                    name: '',
                    email: ''
                },
                passwordForm: {
                    oldPassword: '',
                    password: '',
                    password_confirmation: ''
                }
            };
        },
        computed: {
            user () {
                return api.auth.user;
            }
        },
        methods: {
            updateProfile () {

            },
            updatePassword () {

            },
            async ping () {
                const response = await api.auth.ping();
                console.log(response);
            }
        }
    }
</script>
