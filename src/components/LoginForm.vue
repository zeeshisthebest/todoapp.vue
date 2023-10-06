<template>
    <v-card class="px-5 pt-5 pb-10 my-3 elevation-5">
        <v-card-title class="justify-center">LogIn</v-card-title>
        <v-text-field placeholder="Enter your name" prepend-icon="mdi-account-key" outlined clearable :rules="lengthRule"
            v-model="username" v-on:keyup.enter="login"></v-text-field>
        <v-row class="px-3">
            <v-spacer></v-spacer>
            <v-btn color="indigo" dark v-on:click="login">Login</v-btn>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'LoginForm',
    components: {
    },
    data: function () {
        return {
            username: "",
            lengthRule: [
                v => !!v || 'It is required',
                v => v.length <= 60 || 'Too lengthy',
            ]
        }
    },
    computed: {
    },
    methods: {
        login: function () {
            console.log("HEllllooo");
            if (this.username.length === 0 || this.username.length >= 60) {
                return
            }
            console.log('Loged as' + this.username);
            this.$store.commit('login', this.username)

        },
        clearAuthor: function () {
            this.username = " "
        },
        showUsername: function () { console.log(this.$store.getters.username) }
    }
};
</script>

<style scoped>
</style>
