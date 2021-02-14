<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>{{count}}</h2>
        <button @click="clickAdd">Add</button>
        <button @click="clickDelete">Delete</button>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data () {
        return {
            msg: 'Vuex Counter!'
        }
    },
    computed: {
        // 获取state值
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        clickAdd() {
            //分发action中的add方法
            this.$store.dispatch('add', 1);
        },
        clickDelete() { 
            this.$store.dispatch('delete', 1);
        }
    }
}
</script>
<style scoped>
</style>