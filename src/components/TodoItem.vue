<template>
    <v-card class="px-3 py-5 mx-5 my-10 elevation-5">
        <v-card-title class="justify-center">TODO's List</v-card-title>

        <v-list v-if="items.length !== 0" one-line>
            <!-- <v-list-item-group v-model="selected" active-class="indigo--text" multiple> -->
            <template v-for="(item, index) in items">
                <v-list-item :key="item.title">
                    <v-btn class="mr-2 elevation-1" small color="grey lighten-3" v-on:click="remove(item.id)">
                        <v-icon color="red darken-4">mdi-trash-can-outline</v-icon>
                    </v-btn>
                    <template>
                        <v-hover v-slot="{ hover }">
                            <v-list-item-content v-on:click="markComp(index)" :class="{ 'grey lighten-3': hover }"
                                class="pl-2" v-on:hover="console.log(' Hovered')">
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-hover>

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

                <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
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
            items: [
            ],
            selected: []
        }
    },

    methods: {
        remove: function (id) {
            console.log(id);
            this.items = this.items.filter(e => e.id != id)
        },
        markComp: function (index) {
            console.log(index);
            console.log(this.items[index].active);
            this.items[index].active = !this.items[index].active
        }

    },

    props: {
        msg: String
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
