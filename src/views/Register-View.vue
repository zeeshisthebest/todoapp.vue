<template>
    <v-main>
        <NavBar title="Register"></NavBar>
        <v-card v-if="Object.keys(resp) == 0" class="pa-10">
            <v-skeleton-loader class="mx-auto" max-width="300" type="article,image"></v-skeleton-loader>
        </v-card>
        <RegisterCard v-else :response="resp"></RegisterCard>
    </v-main>
</template>

<script>
import NavBar from '../components/NavBar'
import RegisterCard from '../components/RegisterCard'
import axios from 'axios'

export default {
    name: 'RegisterView',
    components: {
        NavBar,
        RegisterCard
    },
    data () {
        return {
            resp: {}
        }
    },
    methods: {
    },
    computed: {
    },
    created () {
        axios.get('http://localhost:8080/100/info.0.json', {

        })
            .then((response) => {
                console.log(response.data);
                this.resp = response.data;
            })
            .catch(err => console.log(err))

    },
    actions: {

    }
};
</script>
<style scoped>
</style>
