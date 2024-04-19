import Vuex from "vuex";

const store = new Vuex.Store({
    state: {
        item: {
            item: [],
            price: [],
            data: []
        }
    },
    mutations: {
        addItem(state, payload) {
            const {item} = payload;
            state.item.push(item)
        }
    }
})