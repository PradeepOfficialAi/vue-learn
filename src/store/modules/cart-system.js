
const state = {
    count: 1,
    products: ['Watermelon', 'Orange', 'Apple', 'Goa', 'Banana'],
    isUser: false
}
const getters = {
    isUser: (state) => {
        return state.isUser
    }
}
const mutations = {

}
const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}