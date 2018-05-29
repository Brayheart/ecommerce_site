<template>
    <div class="navbar">
        <nav class="green darken-1">
            <div class="container">
                <router-link :to="{name: 'Welcome'}">Lorem!</router-link>
                <ul class="right">
                    <li><router-link :to="{ name: 'Signup'}">Signup</router-link></li>
                    <li><router-link :to="{ name: 'Login'}">Login</router-link></li>
                    <li><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
            
        }
    }
}
</script>

<style>

</style>
