<template>
    <v-card>
        <v-card-title class="justify-center">{{ response.safe_title }}</v-card-title>
        <v-card-subtitle>
            <p class="my-0">Day of the Sticker:{{ response.day }}</p>
            <p class="my-0">Month of the sticker: {{ response.month }}</p>
            <p class="my-0">Year: {{ response.year }}</p>
            <p class="my-0">Number: {{ response.num }}</p>
            <a class="my-0" v-bind:href="response.img" target="_blank">Go to image</a>
            <v-card class="my-4" elevation="4">
                <v-img :src="response.img" max-height="300" height="300" contain><template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="black"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-card>
        </v-card-subtitle>
    </v-card>
</template>
<script>
export default {
    name: 'RegisterCard',
    components: {
    },
    data () {
        return {

        }
    },
    props: {
        response: {
            required: true,
            type: Object
        }
    },
    methods: {
    },
    computed: {
    }
};
</script>
<style scoped>
</style>
