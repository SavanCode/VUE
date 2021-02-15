<template>
    <div id="app">
        <!-- module1 -->
        <h2>{{ module1.name }}</h2>
        <button @click="change1({'name': 'change1'})">module1改变</button>

        <!-- module2 -->
        <h2>{{ module2.name }}</h2>
        <button @click="change2({'name': 'change2'})">module2改变</button>
    </div>
</template>

<script>
// 引入快捷方法
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    name: 'app',
    data () {
        return {
        }
    },
    computed:{
        // mapState取值
        // ...mapState({
        //     module1: state => state.a.module1.name,
        //     module2: state => state.b.module2.name
        // })

        // mapGetter取值
        ...mapGetters(['module1', 'module2'])
    },
    methods: {
        // mapAction取方法
        ...mapActions([
            'change1',
            'change2'
        ])
    }
}
</script>
<style>

</style>