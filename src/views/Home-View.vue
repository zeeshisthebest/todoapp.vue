<template>
    <v-main>
        <NavBar title="WELCOME: Manage Tasks"></NavBar>
        <AddNewTodo />
        <h2 class="text-center text-grey">TODO's List</h2>
        <TodoItem />
    </v-main>
</template>

<script>

import AddNewTodo from '../components/AddNewTodo'
import TodoItem from '../components/TodoItem'
import NavBar from '../components/NavBar'

export default {
    name: 'HomeView',
    components: {
        AddNewTodo,
        TodoItem,
        NavBar
    },
    data: function () {
        return {}

    },
};
</script>
