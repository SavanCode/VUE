<template> 
<el-row type="flex" justify="end">
        <el-col :span="4" class="header_item">
            <el-badge :value="12" :max="99" class="item" type="primary">
                <el-button size="large"  @click="handleMessage">消息</el-button>
            </el-badge>
        </el-col>
        <el-col :span="4" class="header_item">
             <p>Hi,{{admin? "管理员：":"用户"}} {{userName}}</p>
        </el-col>
        <el-col :span="2" class="header_item el-dropdown-link">
            <el-dropdown>
             <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="handleCommand('profile')" icon="el-icon-user">个人信息</el-dropdown-item>
                    <el-dropdown-item @click.native="handleCommand('help')" icon="el-icon-setting">帮助</el-dropdown-item>
                    <el-dropdown-item @click.native="handleCommand('logout')" divided>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
</el-row>
</template>

<script>
    export default {
        data() {
            return {
                userImg:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
            }
        },
        props: { 
          userName: {
          type: String,
          default: 'user',
          required: true
          },
          admin: {
          type: Boolean,
          default: false,
          required: true
          }
        }, 
        methods: { 
            collapseMenu() {
                //this.$store.commit('collapseMenu')
            },
             handleMessage() {
                this.$message('checking for message');
            },
            handleCommand(command) {
                console.log(command)
                if (command === 'logout') {
                    this.$store.dispatch('ClearToken').then((res) => {
                        if (res.ok) {
                            this.$router.push('/login');
                        }
                    });
                } else {
                    this.$message('click on item ' + command);
                }
            }
        }
    }
</script>

<style scoped>
.item {
  margin-top: 10px;
  /* margin-right: 40px; */
}
.header_item{
    text-align: end;
    margin-top: 10px;
}
</style>