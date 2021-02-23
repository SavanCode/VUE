import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { 
     nav:{ brand: '博宁软件',title:'博宁服饰ERP管理系统',link:'www.goingt.com',qq:'7471561651064'},
     leftBarOptions:['基础管理','业务管理','生产管理','采购管理','仓库管理','财务管理'],
     window:{width:0,height:0},
     fontSize:0,
     optionWidth:0,
     rightArrowWidth:0,
     btnWidth:0,
     btnHeight:0,
     btnFontSize:0,
     downArrowWidth:0,
     imgUrl:'https://dyltqmyl993wv.cloudfront.net/assets/stacks/erpnext/img/erpnext-stack-220x234.png'
}

const mutations = {
    SET_WINDOW_WIDTH(state,width){
        state.window.width=width
    },
    SET_WINDOW_HEIGHT(state,height){
        state.window.height=height
    },
    SET_FONTSIZE(state,fontSize){
        state.fontSize=fontSize
    },
    SET_FONTSIZESMALL(state){
        state.fontSize=10
    },
    SET_FONTSIZEMEDIUM(state){
        state.fontSize=15
    },
    SET_FONTSIZELARGE(state){
        state.fontSize=30
    },
    SET_OPTIONWIDTH(state,optionWidth){
        state.optionWidth=optionWidth
    },
    SET_BTN_WIDTH(state,width){
        state.btnWidth=width
    },
    SET_BTN_HEIGHT(state,height){
        state.btnHeight=height
    },
    SET_BTN_FONTSZIE(state,btnFontSize){
        state.btnFontSize=btnFontSize
    },
    SET_RIGHTARROW_WIDTH(state,rightArrowWidth){
        state.rightArrowWidth=rightArrowWidth
    },
    SET_DOWNARROW_WIDTH(state,downArrowWidth){
        state.downArrowWidth=downArrowWidth
    }
}

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
    },
    btnWidth:function(state){
        return state.btnWidth
    },
    btnHeight:function(state){
        return state.btnHeight
    },
    btnFontSize:function(state){
        return state.btnFontSize
    },
    rightArrowWidth:function(state){
        return state.rightArrowWidth
    },
    downArrowWidth:function(state){
        return state.downArrowWidth
    }
}


const actions ={ 
    setWindowWidth({commit},data){
        commit('SET_WINDOW_WIDTH',data)

        //set fontSize btnsize
        if(data < 768){
            commit('SET_FONTSIZESMALL')
            commit('SET_BTN_WIDTH',data/30)
            commit('SET_BTN_HEIGHT',data/60)
            commit('SET_RIGHTARROW_WIDTH',data/30) 
         }else if(768 < data && data<=1024){
            commit('SET_FONTSIZEMEDIUM')
            commit('SET_BTN_WIDTH',data/30)
            commit('SET_BTN_HEIGHT',data/60)
            commit('SET_RIGHTARROW_WIDTH',data/30)
         }else if(data > 1024){
            commit('SET_FONTSIZELARGE')
            commit('SET_BTN_WIDTH',data/10)
            commit('SET_BTN_HEIGHT',data/40)
            commit('SET_RIGHTARROW_WIDTH',data/15)
         }

         commit('SET_BTN_FONTSZIE',data/100)
         commit('SET_DOWNARROW_WIDTH',data/20)
         
    },
    setWindowHeight({commit},data){
        commit('SET_WINDOW_HEIGHT',data)
    },
    // setFontSize({commit},data){
    //     commit('SET_FONTSIZE',data)
    // },
    setOptionWidth({commit},data){
        commit('SET_OPTIONWIDTH',data)
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default store;