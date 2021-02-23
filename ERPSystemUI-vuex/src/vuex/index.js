import Vue from 'vue'
import Vuex from 'vuex' 
import state from "@/vuex/state";
import getters from "@/vuex/getters";
import mutations from "@/vuex/mutations";
import actions from "@/vuex/actions";

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions, 
})

export default store