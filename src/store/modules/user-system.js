
const state = {
    isUser: true
}

const getters = {
    isUser: (state) => {
        return state.isUser
    }
}

const actions = {
    isUser: ({state, commit}) => {
       commit('isUser',  state.isUser = false)
    }
}

const mutations = {
    isUser: (state, value) => {
        return state.isUser = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}