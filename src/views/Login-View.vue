<template>
    <v-main>
        <NavBar title="Login in With Your Name"></NavBar>
        <LoginForm v-if="this.username === ''"></LoginForm>
        <LoggedIn v-else></LoggedIn>
    </v-main>
</template>

<script>
import NavBar from '../components/NavBar'
import LoginForm from '../components/LoginForm'
import LoggedIn from '../components/LoggedIn'

export default {
    name: 'LoginView',
    components: {
        NavBar,
        LoginForm,
        LoggedIn
    },

    data: () => ({
        //
    }),
    methods: {

    },
    computed: {
        username () { return this.$store.getters.username }
    }
};
</script>
