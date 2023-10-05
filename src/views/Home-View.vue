<template>
    <v-main>
        <v-app-bar app color="indigo" dark>
            <v-toolbar-title>Welcome to TODO App</v-toolbar-title>
        </v-app-bar>
        <AddNewTodo />
        <TodoItem v-bind:items="this.items" />
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
        items: [
            { id: 1, title: 'Title 1', active: false },
            { id: 2, title: 'Title 2', active: false },
            { id: 3, title: 'Title 3', active: false },
            { id: 4, title: 'Title 4', active: false },

        ]
    }),
};
</script>
