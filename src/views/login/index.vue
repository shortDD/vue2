<template>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="title">
        <h2>用户登入</h2>
      </div>
      <el-form :model="form" :rules="rules" ref="formEl">
        <el-form-item prop="username">
          <svg-icon icon="user" class="icon"></svg-icon>
          <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <svg-icon icon="password" class="icon"></svg-icon>
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm">登入</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { username: "", password: "" },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.formEl.validate((valid) => {
        if (valid) {
          this.$store.dispatch("app/login", this.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 100vh;
  background-color: $themeBlue;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-card {
    width: 30%;
    max-width: 450px;
    min-width: 300px;
    height: 300px;
    .title {
      padding: 20px 0;
      h2 {
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        color: #fff;
      }
    }
    ::v-deep .el-form-item {
      width: 100%;
      .el-form-item__content {
        display: flex;
        align-items: center;
        .icon {
          position: absolute;
          z-index: 1;
          margin-left: 10px;
        }
        .el-input__inner {
          padding: 0 15px 0 30px;
        }
      }
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>
