import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// 1、state：创建初始化状态
const state = { 
     nav:{ brand: '博宁软件',title:'博宁服饰ERP管理系统',link:'www.goingt.com',qq:'7471561651064'},
     leftBarOptions:['基础管理','业务管理','生产管理','采购管理','仓库管理','财务管理'],
     window:{width:0,height:0},
     fontSize:0,
     optionWidth:0,
     imgUrl:'https://dyltqmyl993wv.cloudfront.net/assets/stacks/erpnext/img/erpnext-stack-220x234.png'
}

// 2、mutations：创建改变状态的方法
const mutations = {
    // 状态变更函数-一般大写 
    SET_WINDOW_WIDTH(state,width){
        state.window.width=width
    },
    SET_WINDOW_HEIGHT(state,height){
        state.window.height=height
    },
    SET_FONTSIZE(state,fontSize){
        state.fontSize=fontSize
    },
    SET_OPTIONWIDTH(state,optionWidth){
        state.optionWidth=optionWidth
    }
}

// 3、getters：提供外部获取state
const getters = {
    nav:function(state){
        return state.nav;
    },
    leftBarOptions:function(state){
        return state.leftBarOptions;
    },
    window:function(state){
        return state.window
    },
    fontSize:function(state){
        return state.fontSize
    },
    optionWidth:function(state){
        return state.optionWidth
    },
    imgUrl:function(state){
        return state.imgUrl
    }
}

// 4、actions：创建驱动方法改变mutations
const actions ={
    // 触发mutations中相应的方法-一般小写 
    setWindowWidth({commit},data){
        commit('SET_WINDOW_WIDTH',data)
    },
    setWindowHeight({commit},data){
        commit('SET_WINDOW_HEIGHT',data)
    },
    setFontSize({commit},data){
        commit('SET_FONTSIZE',data)
    },
    setOptionWidth({commit},data){
        commit('SET_OPTIONWIDTH',data)
    }
}

// 5、全部注入Store中
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

// 6、输出store
export default store;