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
          <el-input @keyup.enter.native="handleLogin" v-model="model.username" placeholder="Username" prefix-icon="el-icon-user"></el-input>
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
          >Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {
      validCredentials: {
        username: "lightscope",
        password: "lightscope"
      },
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
            message: "密码长度最少为5位",
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
    //   let valid = this.$refs.form.validate();
    //   if (!valid) {
    //     return;
    //   }
    //   this.loading = true;
       
    //   this.loading = false;
    //   if (
    //     this.model.username === this.validCredentials.username &&
    //     this.model.password === this.validCredentials.password
    //   ) {
    //     this.$message.success("Login successfull");
    //   } else {
    //     this.$message.error("Username or password is invalid");
    //   }
            this.$refs.loginForm.validate(valid => {
            if (valid) {
                let loading = this.$loading({
                    lock: true,
                    text: '登录中,请稍后。。。',
                    spinner: "el-icon-loading"
                });
                //     this.$store.dispatch("GenerateSalt", this.loginForm.name).then((salt) => {
                //         console.log('salt',salt)
                //     this.$store.dispatch("GenerateToken", {salt, user: this.loginForm}).then(() => {
                //         this.$router.push({path: '/'}).then(() => loading.close());
                //     }).catch(() => {
                //         loading.close();
                //     });
                // }).catch(() => {
                //     loading.close();
                //     });
                loading.close();
            }
        });
    }
  }
};
</script>

<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
</style>
<style lang="scss">
    @import "~@/assets/scss/login.scss";
</style>
