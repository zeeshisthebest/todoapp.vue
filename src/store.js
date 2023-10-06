// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [], //new Map(),
    },
    mutations: {
        addItem (state, item) {
            item.id = state.items.length
            console.log(item.id);
            state.items.push(item)
        },
        rmvItem (state, id) {
            state.items = state.items.filter(each => each.id !== id)
        },
        markItem (state, item) {
            const index = state.items.indexOf(item)
            state.items[index].active = !state.items[index].active
        },
        markEditing (state, item) {
            const index = state.items.indexOf(item)
            state.items[index].isEditing = !state.items[index].isEditing
        }
    },

    actions: {
    },
    getters: {
        totalItems: state => state.items.length,
        items: state => state.items
    },
});
