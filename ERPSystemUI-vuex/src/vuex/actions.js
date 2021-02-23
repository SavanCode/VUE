export default {
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
            commit('SET_BTN_HEIGHT',data/30)
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