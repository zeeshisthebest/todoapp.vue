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
    </v-card>
</template>

<script>

export default {
    name: 'AddNewTodo',
    components: {
    },

    data: () => ({
        newTaskText: "",
        lengthRule: [
            v => v.length <= 60 || 'Can not be lengthier than 60 chars',
            v => !!v || 'It is required',

        ]
    }),
    methods: {
        addTask: async function () {
            if (this.newTaskText.length > 60 || this.newTaskText.length === 0) return
            //Storing via vuex
            this.$store.commit('addItem', {
                title: this.newTaskText,
                active: false,
                isEditing: false,
                isarchived: false
            });
            this.newTaskText = ""; //Resseting the field

        },
    }
};

</script>
