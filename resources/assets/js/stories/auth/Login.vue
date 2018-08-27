<template>
    <div>
        <Header subtitle="Login"/>

        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'me' }">User</router-link>

        <div id="login">
            <div class="login-card">

                <div class="card-title">
                    <h1>Please Sign In</h1>
                </div>

                <div class="content">
                    <input v-model="email" id="email" type="email" placeholder="Email" required autofocus>
                    <input v-model="password" id="password" type="password" placeholder="Password" required>
                    <button @click="sendForm" class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/api';

    export default {
        name: "Login",
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            async sendForm() {
                const data = {
                    email: this.email,
                    password: this.password
                };

                await api.auth.login(data);
                this.$router.push({name: 'home'})
            }
        }
    }
</script>

<style lang="css">
    #login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: #F7F7F7;
    }
    #login .login-card {
        background: #fff;
        width: 24rem;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.11);
        margin-bottom: auto;
        margin-top: 20px;
    }
    #login .login-card .card-title {
        background-color: #00b89c;
        padding: 2rem;
    }
    #login .login-card .card-title h1 {
        color: #fff;
        text-align: center;
        font-size: 1.2rem;
    }
    #login .login-card .content {
        padding: 3rem 2.5rem 5rem;
    }
    #login .login-card #email, #login .login-card #password {
        display: block;
        width: 100%;
        font-size: 1rem;
        margin-bottom: 1.75rem;
        padding: 0.25rem 0;
        border: none;
        border-bottom: 1px solid #dbdbdb;
        transition: all .5s;
    }
    #login .login-card #email:hover, #login .login-card #password:hover {
        border-color: #7a7a7a;
    }
    #login .login-card #email:active, #login .login-card #email:focus, #login .login-card #password:active, #login .login-card #password:focus {
        border-color: #00d1b2;
    }
    #login .login-card .checkbox {
        color: #b5b5b5;
        font-size: 0.8rem;
    }
    #login .login-card .checkbox span {
        margin-left: 0.5rem;
    }
    #login .login-card a {
        font-size: 0.8rem;
    }
    #login .login-card .options {
        color: #b5b5b5;
        /* margin-bottom: 1.5rem; */
    }
    #login .login-card button {
        cursor: pointer;
        font-size: 1.2rem;
        color: #00d1b2;
        border-radius: 4rem;
        display: block;
        width: 100%;
        background: transparent;
        border: 2px solid #00d1b2;
        padding: 0.9rem 0 1.1rem;
        transition: color .5s, border-color .5s;
    }

    #login .login-card button:hover, #login .login-card button:focus {
        color: #009e86;
        border-color: #009e86;
    }
    #login .login-card button:active {
        transform: translateY(1px);
    }

    label {
        cursor: pointer;
    }

    .regular-checkbox {
        display: none;
    }

    .regular-checkbox + label {
        background-color: #fafafa;
        border: 1px solid #dbdbdb;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        padding: 7px;
        border-radius: 3px;
        display: inline-block;
        position: relative;
    }

    .regular-checkbox:checked + label {
        background-color: #e9ecee;
    }

    .regular-checkbox:checked + label:after {
        content: '\2714';
        font-size: 11px;
        position: absolute;
        top: 0;
        left: 3px;
        color: #b5b5b5;
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
</style>
