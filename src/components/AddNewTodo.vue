<template>
    <v-card class="px-3 py-5 mt-5 my-3 elevation-5">
        <v-card-title>Add New Task</v-card-title>
        <v-card-text class="py-0">
            <v-text-field placeholder="What to do..." prepend-icon="mdi mdi-format-list-text" outlined clearable
                counter="60" color="indigo darken-4" v-model="newTaskText" v-on:keyup.enter="addTask">
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
        newTaskText: ""
    }),
    methods: {
        addTask: function () {
            this.$store.commit('addItem', {
                title: this.newTaskText,
                active: false
            });
            this.newTaskText = "";
        }
    }
};
</script>
