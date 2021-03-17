<!-- login 样式-->
<template>
  <div class="login">
    <el-card>
      <h2>Login</h2>
      <el-form
        class="login-form"
        :model="model"
        :rules="rules"
        ref="loginForm"
        @submit.native.prevent="login"
      >
        <el-form-item prop="username">
          <el-input
            @keyup.enter.native="handleLogin"
            v-model="model.username"
            placeholder="Username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            @keyup.enter.native="handleLogin"
            v-model="model.password"
            placeholder="Password"
            type="password"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            @click.native.prevent="handleLogin"
            block
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="demoInfo">
      <p>学生账号: s或者S 开头</p>
      <p>教师账号: t或者T 开头</p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return { 
      model: {
        username: "",
        password: ""
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 4,
            message: "用户名长度最少为5位",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            message: "密码长度最少为位5",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleLogin() { 
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          let loading = this.$loading({
            lock: true,
            text: "登录中,请稍后。。。",
            spinner: "el-icon-loading"
          });  
          
          this.$store.dispatch("GenerateToken", {user: this.model}).then(() => {
              this.$router.push({path: '/'}).then(() => loading.close());
          }).catch((error) => {
            console.log(error)
              loading.close();
          });
          loading.close();
        }
      });
    }
  }
};
</script>

<style scoped>
.login { 
  margin-top: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.demoInfo{
    padding: 0;
    margin: 30px 0 0 0;
}
</style>
<style lang="scss">
@import "~@/assets/scss/login.scss";
</style>
