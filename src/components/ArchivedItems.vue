<template>
    <v-card class="px-3 py-5 my-3 elevation-5">
        <v-card-subtitle>Total Archvied Tasks: {{ getItems.length }}</v-card-subtitle>
        <v-list v-if="getItems.lenght !== 0" two-line class="py-0">
            <!-- Each Item -->
            <template v-for="(item, index) in getItems">
                <v-hover :key="index">
                    <v-list-item class="blue lighten-5">
                        <v-icon>mdi-format-list-text</v-icon>
                        <!-- Tile Content -->
                        <v-list-item-content class="pl-2">
                            <!-- Field for view -->
                            <v-list-item-title v-text="item.title"></v-list-item-title>

                        </v-list-item-content>

                        <v-btn v-on:click="unarchiveItem(item)" class="mr-2" icon>
                            <v-icon color="grey darken-4 ">
                                mdi-archive-arrow-up
                            </v-icon>
                        </v-btn>

                    </v-list-item>
                </v-hover>
                <v-divider v-if="index < totalItem - 1" :key="'divider' + index"></v-divider>
            </template>
        </v-list>
        <!-- If list is empty -->
        <p v-else class="text-center text--secondary">No archived tasks in the list</p>
    </v-card>
</template>

<script>
export default {
    name: 'ArchivedItems',
    data () {
        return {
        }
    },
    props: {
        // items: {
        //     type: Array,
        //     required: true
        // }
    },
    methods: {
        unarchiveItem (item) {
            this.$store.commit('unarchiveItem', item)
        }

    },
    computed: {
        getItems () {
            return this.$store.getters.archivedItems;
        },


    }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
