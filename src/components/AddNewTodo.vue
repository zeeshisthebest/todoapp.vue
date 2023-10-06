<template>
    <v-card class="px-3 py-5 mt-5 my-3 elevation-5">
        <v-card-title>Add New Task</v-card-title>
        <v-card-text class="py-0">
            <v-text-field placeholder="What to do..." prepend-icon="mdi-format-list-text" outlined clearable counter="60"
                color="indigo darken-4" v-model="newTaskText" :rules="lengthRule" v-on:keyup.enter="addTask">
            </v-text-field>
        </v-card-text>
        <v-card-actions class="py-0">
            <v-btn v-on:click='addTask'>Add</v-btn>
        </v-card-actions>

        <v-banner single-line v-if="!isLogged">
            Please Log In to save
            <template v-slot:actions>
                <v-btn text color="deep-purple accent-4" to="/login">
                    Login
                </v-btn>
            </template>
        </v-banner>
    </v-card>
</template>

<script>

export default {
    name: 'AddNewTodo',
    components: {
    },

    data: () => ({
        newTaskText: "",
        isLogged: true,
        lengthRule: [
            v => v.length <= 60 || 'Can not be lengthier than 60 chars',
            v => !!v || 'It is required',

        ]
    }),
    methods: {
        addTask: async function () {
            if (this.newTaskText.length > 60 || this.newTaskText.length === 0) {
                return
            } else if (this.username.length === 0) {
                this.isLogged = false
                return
            }
            this.isLogged = true
            //Storing via vuex
            this.$store.commit('addItem', {
                title: this.newTaskText,
                active: false,
                isEditing: false,
                isarchived: false,
                author: this.username
            });
            this.newTaskText = ""; //Resseting the field

        },
    },
    computed: {
        username () {
            return this.$store.getters.username
        }
    }

};

</script>
