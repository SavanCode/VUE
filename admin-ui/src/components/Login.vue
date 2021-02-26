<template> 
  <div class="container">
  <h3 class="title">系统登录</h3>
 <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
  <el-form-item label="账户" prop="username">
    <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="请输入账号"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model.number="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
  <el-form-item class="btns" style="width:100%;">
    <el-button type="primary" @click.native.prevent="login('ruleForm')" :loading="logining">登录</el-button>
    <el-button type="primary" @click.native.prevent="reset()">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template> 

<script>
// import mock from '@/mock/mock.js'; 这是封装mock之前 
import mock from '@/mock/index.js';//封装mock之后
import Cookies from "js-cookie";
import router from '@/router'
export default {
  name: 'Login',
  data(){
      return{
          ruleForm:{
              username:'',
              password:''
          },
          logining: false,
          checked:true,
          dialogVisible:false,
          //表单验证，需要在 el-form-item 元素中增加prop属性
          rules:{
              username:[
                  {required:true,message:"账号不可为空",trigger:"blur"}
              ],
              password:[
                  {required:true,message:"密码不可为空",tigger:"blur"}
              ]
          }
      }
  },
  methods: {
    login(formName) {
      //为表单绑定验证功能
      this.$refs[formName].validate((valid)=>{
          if(valid){
              let userInfo = {account: this.ruleForm.username,password:this.ruleForm.password}
              this.$api.login(JSON.stringify(userInfo)).then(function(res) {
                  Cookies.set('token', res.data.token) // 放置token到Cookie 
                  sessionStorage.setItem('user', userInfo.account) // 保存用户到本地会话
                  router.push('/')  // 登录成功，跳转到主页
                }).catch(function(res) {
                  alert(res);
                });  
          }else{ 
              return false;
          }
      });
    },
    reset() {
        this.$refs.ruleForm.resetFields();
      }
  }
}
</script>
<style scoped>
.container{ 
  margin-top: 50px;
    margin: auto;
    width: 300px;
    border-radius: 5px;
    background-clip: padding-box;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    padding: 20px 20px 20px 0;
}
.remember{
  margin: 0px 0px 35px 0px;
}
.btns{
  display: flex
}
</style>