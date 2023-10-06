<template>
    <v-card class="px-5 py-5 my-3 elevation-5 text-center ">
        <v-card-title class="justify-center py-0">You are Logged As</v-card-title>
        <h1 class="text--secondary my-5">{{ name }}</h1>
        <v-btn color="indigo" dark v-on:click="logout">Log Out</v-btn>

    </v-card>
</template>
<script>
export default {
    name: 'LoggedIn',
    components: {
    },
    data () {
        return {
        }
    },
    methods: {
        logout: function () {
            this.$store.commit('logout')
        }
    },
    computed: {
        name () { return this.$store.getters.username }
    }
};
</script>
<style scoped>
</style>
