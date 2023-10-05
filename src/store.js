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
            state.items.push(item)
        },
        rmvItem (state, id) {
            state.items = state.items.filter(each => each.id !== id)
        },
        markItem (state, id) {
            const index = state.items.indexOf(state.items.find(e => e.id == id))
            state.items[index].active = !state.items[index].active
        }
    },

    actions: {
    },
    getters: {
        totalItems: state => state.items.length,
        items: state => state.items
    },
});
