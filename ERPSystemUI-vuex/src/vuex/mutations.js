
export default {
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
