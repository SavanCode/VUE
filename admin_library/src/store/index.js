import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login' 
import getters from './getters'

Vue.use(Vuex);

//store的设置
const store = new Vuex.Store({
    modules: {
       login
    },
    getters
});

export default store