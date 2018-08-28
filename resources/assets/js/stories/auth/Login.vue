<template>
    <div class="flex justify-center items-center w-full h-full bg-grey-lightest">
        <div class="w-full max-w-xs">
            <form
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                @submit.prevent="sendForm">

                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input v-model="form.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
                </div>
                <div class="mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input v-model="form.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********">
                    <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p class="text-center text-grey text-xs">
                ©2018 LevelApp Corp. All rights reserved.
            </p>
        </div>
    </div>
</template>

<script>
    import api from '@/api';
    import store from '@/store';

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            async sendForm() {
                await api.auth.login(this.form);
                this.$router.push({ name: 'home' });
            }
        },
        created () {
            if (store.getters.token) {
                this.$router.push( {name: 'home' });
            }
        }
    }
</script>
