<template>
    <v-card class="px-3 py-5 mt-3 elevation-5">
        <v-card-subtitle>Total Tasks: {{ totalItem }}</v-card-subtitle>

        <v-list v-if="totalItem !== 0" two-line>
            <!-- <v-list-item-group v-model="selected" active-class="indigo--text" multiple> -->
            <template v-for="(item, index) in getItems">
                <v-hover :key="item.title">
                    <v-list-item v-on:click="markComp(item.id)">
                        <v-btn class="mr-2 elevation-1" small color="grey lighten-3" v-on:click="remove(item.id)">
                            <v-icon color="red darken-4">mdi-trash-can-outline</v-icon>
                        </v-btn>
                        <template>

                            <v-list-item-content class="pl-2">
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>

                                <v-icon v-if="!item.active" color="grey lighten-1">
                                    mdi-check-outline
                                </v-icon>

                                <v-icon large v-else color="green darken-3">
                                    mdi-check-bold
                                </v-icon>
                            </v-list-item-action>
                        </template>
                    </v-list-item>
                </v-hover>

                <v-divider v-if="index < totalItem - 1" :key="index"></v-divider>
            </template>
            <!-- </v-list-item-group> -->
        </v-list>
        <p v-else class="text-center text--secondary">No task in the list</p>
    </v-card>
</template>

<script>
export default {
    name: 'TodoItem',
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
        remove: function (id) {
            this.$store.commit('rmvItem', id)
        },
        markComp: function (id) {
            this.$store.commit('markItem', id)
        },
        printAll: function () { console.log(this.$store.getters.items) }

    },
    computed: {
        totalItem () {
            return this.$store.getters.totalItems;
        },
        getItems () {
            return this.$store.getters.items;
        }
    }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#item {
    /* background-color: ; */
    border: #fff;
    border-style: Solid;
    border-width: 2px;
    border-radius: 10px;
    text-align: left;
    background-color: gainsboro;
    display: flex;
}

#item p {
    display: inline-block;
    padding: 10px 0;
}

#item .checkbox {
    margin: auto 0 auto 15px;
    padding: 10px 0;
    width: 20px;
    display: inline-block;
    height: 20px;
}

#item .sep {
    border-left: 5px solid rgb(202, 201, 201);
    margin: 0 10px;
    /* height: max; */
}
</style>
