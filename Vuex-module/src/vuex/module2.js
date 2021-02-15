// 模块1
const module2 = {
    // 初始化状态
    state: {
        module2: {
            name: '模块2'
        }
    },
    // 编写动作
    mutations: {
        CHANGE2 (state, data) {
            state.module2 = data;
        }
    },
    // 取值
    getters: {
        module2: function(state){
            return state.module2;
        }
    },
    // 创建驱动，可异步
    actions: {
        change2 ({commit}, data) {
            commit('CHANGE2', data)
        }
    }
}

export default module2;