<!-- layout样式 导航栏以及侧边栏引入-->
<template>
     <el-container style="height: 100%">
        <el-aside width="auto">
            <common-aside></common-aside>
        </el-aside> 
        <el-container> 
            <el-header>
                <common-header :userName="user.userName" :admin="user.isAdmin"></common-header>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import CommonAside from '@/components/layout/CommonAside'
    import CommonHeader from "@/components/layout/CommonHeader";

    export default {
        components: {
            CommonAside,
            CommonHeader
        },
        computed: {
            //{ "isAdmin": false, "userName": "s11111" }
            user() {
            return this.$store.getters.user
            }
        }
    }
</script>

<style lang="scss">

</style>