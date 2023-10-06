<template>
    <v-card class="px-3 py-5 my-3 elevation-5">
        <v-card-subtitle>Total Tasks: {{ getItems.length }}</v-card-subtitle>
        <v-list v-if="getItems.length !== 0" two-line class="py-0">
            <!-- Each Item -->
            <template v-for="(item, index) in  getItems ">
                <v-hover :key="index">
                    <v-list-item :class="[item.active ? 'light-green lighten-4' : 'blue lighten-5']">
                        <!-- Delete Button -->
                        <v-btn class="mr-2 elevation-1" small v-on:click="remove(item.id)">
                            <v-icon color="red darken-4">mdi-trash-can-outline</v-icon>
                        </v-btn>
                        <!-- Tile Content -->
                        <v-list-item-content class="pl-2">
                            <!-- Field for view -->
                            <v-list-item-title v-if="!item.isEditing" v-text="item.title"></v-list-item-title>
                            <!-- Text Field for editing -->
                            <v-text-field v-else hide-details="auto" placeholder="Enter Here..." autofocus counter="60"
                                v-on:keyup.enter="editItem(item)" v-model="item.title" :rules="lengthRule"></v-text-field>
                            <!-- Name of the author -->
                            <v-list-item-subtitle v-text="'Author: ' + item.author"></v-list-item-subtitle>
                        </v-list-item-content>
                        <!-- Button to Edit -->
                        <v-btn small v-if="!item.active" v-on:click="editItem(item)" class="mr-2" icon>
                            <v-icon color="grey">
                                mdi-pencil-outline
                            </v-icon>
                        </v-btn>
                        <v-btn v-else v-on:click="archiveItem(item)" class="mr-2" icon>
                            <v-icon color="grey darken-4 ">
                                mdi-archive-arrow-down
                            </v-icon>
                        </v-btn>
                        <!-- Button to mark completed -->
                        <v-btn small v-on:click="markComp(item)" icon>
                            <v-icon v-if="!item.active" color="grey lighten-1">
                                mdi-checkbox-blank-outline
                            </v-icon>
                            <v-icon large v-else color="green darken-3">
                                mdi-checkbox-marked-outline
                            </v-icon>
                        </v-btn>
                    </v-list-item>
                </v-hover>
                <v-divider v-if="index < getItems.length - 1" :key="'divider' + index"></v-divider>
            </template>
        </v-list>
        <!-- If list is empty -->
        <p v-else class="text-center text--secondary">No task in the list</p>
    </v-card>
</template>

<script>

export default {
    name: 'TodoItem',
    data () {
        return {
            lengthRule: [
                v => v.length <= 60 || 'Can not be lengthier than 60 chars',
                v => !!v || 'It is required',

            ]
        }
    },
    props: {
        // items: {
        //     type: Array,
        //     required: true
        // }
    },
    methods: {
        remove: function (id) {
            this.$store.commit('rmvItem', id)
        },
        markComp: function (item) {
            this.$store.commit('markItem', item)
        },
        editItem: function (item) {
            if (this.lengthRule[0](item.title) === true
                && this.lengthRule[1](item.title) === true) {
                this.$store.commit('markEditing', item)
            }
        },
        archiveItem: function (item) {
            this.$store.commit('archiveItem', item)
        }

    },
    computed: {
        getItems () {
            return this.$store.getters.items;
        },


    }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
