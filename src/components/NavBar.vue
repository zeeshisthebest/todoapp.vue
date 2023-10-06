<template>
    <div>
        <v-app-bar app color="indigo" dark>
            <v-spacer />
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer />
        </v-app-bar>
        <v-tabs class="py-0">
            <v-spacer />
            <v-tab exact to="/">Home</v-tab>
            <v-tab exact to="/archives">Completed</v-tab>
            <v-tab exact to="/login">Login</v-tab>
            <v-spacer />
        </v-tabs>

    </div>
</template>

<script>

export default {
    name: 'NavBar',

    components: {
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },

    data: function () {
        return {}

    },
};
</script>
