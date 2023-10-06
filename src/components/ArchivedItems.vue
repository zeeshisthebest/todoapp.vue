<template>
    <v-card class="px-3 py-5 my-3 elevation-5">
        <!-- Search bar -->
        <v-card-title>
            <v-spacer></v-spacer>
            <v-col cols="5"><v-text-field outlined dense prepend-icon="mdi-magnify" placeholder="search..." width="100px"
                    v-model="searchText">
                </v-text-field>
            </v-col>
        </v-card-title>
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
                            <a><v-list-item-subtitle text v-text="'Author: ' + item.author"
                                    v-on:click="forUsername(item.author)"></v-list-item-subtitle></a>
                        </v-list-item-content>
                        <!-- Unarchive Button -->
                        <v-btn v-on:click="unarchiveItem(item)" class="mr-2" icon>
                            <v-icon color="grey darken-4 ">
                                mdi-archive-arrow-up
                            </v-icon>
                        </v-btn>
                    </v-list-item>
                </v-hover>
                <v-divider v-if="index < getItems.lenght - 1" :key="'divider' + index"></v-divider>
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
            isFiltered: false,
            name: "",
            searchText: ""
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
        },
        forUsername (user) {
            console.log(user);
            if (!this.isFiltered) {
                this.name = user
                this.isFiltered = true
            } else {
                this.isFiltered = false
                this.name = ""
            }
        }

    },
    computed: {
        getItems () {
            if (this.isFiltered) {
                return this.$store.getters.archivedItems.filter(e => e.author === this.name)
            } else if (this.searchText != "") {
                return this.$store.getters.archivedItems.filter(e => e.title.toLowerCase().includes(this.searchText.toLowerCase()) || e.author.toLowerCase().includes(this.searchText.toLowerCase()))
            } else {
                return this.$store.getters.archivedItems
            }
        }


    }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
