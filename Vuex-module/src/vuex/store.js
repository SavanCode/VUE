// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入module1
import module1 from '@/vuex/module1'
// 引入module2
import module2 from '@/vuex/module2'

// 使用vuex
Vue.use(Vuex)

// 模块注入
const store = new Vuex.Store({
    modules: {
        a: module1,
        b: module2
    }
})

// 输出store
export default store;