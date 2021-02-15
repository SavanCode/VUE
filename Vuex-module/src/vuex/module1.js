// 模块1
const module1 = {
    // 初始化状态
    state: {
        module1: {
            name: '模块1'
        }
    },
    // 编写动作
    mutations: {
        CHANGE1 (state, data) {
            state.module1 = data;
        }
    },
    // 取值
    getters: {
        module1: function(state){
            return state.module1;
        }
    },
    // 创建驱动，可异步
    actions: {
        change1 ({commit}, data) {
            commit('CHANGE1', data)
        }
    }
}

export default module1;