<template>
    <v-main>
        <v-app-bar app color="indigo" dark>
            <v-toolbar-title>Home View App</v-toolbar-title>
        </v-app-bar>
        <v-card class="px-3 py-5 mx-5 my-10 elevation-5">
            <v-card-title>Add New Task</v-card-title>
            <v-card-text>
                <AddNewTodo></AddNewTodo>
            </v-card-text>
            <v-card-actions>
                <v-btn>Click me</v-btn>
            </v-card-actions>
        </v-card>
        <TodoItem />
    </v-main>
</template>

<script>

import AddNewTodo from '../components/AddNewTodo'
import TodoItem from '../components/TodoItem'

export default {
    name: 'HomeView',

    components: {
        AddNewTodo,
        TodoItem
    },

    data: () => ({
        //
    }),
};
</script>
