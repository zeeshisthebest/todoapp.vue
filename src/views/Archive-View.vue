<template>
    <v-main>
        <NavBar title="Archives| All Completed Tasks"></NavBar>
        <ArchivedItems></ArchivedItems>
    </v-main>
</template>

<script>
import NavBar from '../components/NavBar'
import ArchivedItems from '../components/ArchivedItems'

export default {
    name: 'ArchiveView',
    components: {
        NavBar, ArchivedItems
    },

    data: () => ({
        //
    }),
};
</script>
