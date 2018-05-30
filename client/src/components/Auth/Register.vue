<template>
    <div class="register container">
        <form @submit.prevent="register" class="card-panel">
            <h2 class="center deep-purple-text">Register</h2>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password">
            </div>
            <!-- <div class="field">
                <label for="alias">Alias:</label>
                <input type="text" name="alias" v-model="alias">
            </div> -->
            <!-- <p class="red-text center" v-if="feedback">{{feedback}}</p> -->
            <div class="field center">
                <button class="btn deep-purple">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'

export default {
    name: 'Register',
    data(){
        return{
            email: null,
            password: null
        }
    },
    methods: {
        async register(){
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log(response)
        }
    }
}
</script>

<style>
.signup{
    max-width: 400px;
    margin-top: 60px;
}
.signup h2{
    font-size: 2.4em;
}
.signup .field{
    margin-bottom: 16px;
}
</style>