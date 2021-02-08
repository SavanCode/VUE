<template>
    <div>
        <p>user List</p>
        <router-link style="margin: 0 10px" :to="'/user/' + item.id +'/'+item.userName" v-for="(item,index) in userList" :key="index">{{item.userName}}</router-link>  
    </div>
</template>

<script>
export default {
    name:'UserList',
    data(){
        return{userList:[{id:1,userName:'u1'},{id:2,userName:'u2'},{id:3,userName:'u3'}]}
    }
}

</script>
<style scoped>
</style>