import Vue from 'vue'
import Vuex from 'vuex'
import CartSystem from './modules/cart-system.js'
import UserSystem from './modules/user-system'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        CartSystem,
        UserSystem
    }
})
