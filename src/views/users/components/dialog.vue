<template>
  <el-dialog
    :title="title"
    :visible="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <el-form :model="form" :rules="rules" ref="formEl" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item v-if="title === '添加新用户'" label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="mobile">
        <el-input v-model="form.mobile"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addUser, editUser } from "@/api/users";
export default {
  props: [
    "dialogVisible",
    "closeDialog",
    "title",
    "dialogTable",
    "initUserList",
  ],
  data() {
    return {
      form: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        mobile: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.formEl.validate(async (valid) => {
        if (valid) {
          if (this.title === "添加新用户") {
            await addUser(this.form);
          } else {
            await editUser(this.form);
          }
          this.$message(this.$t("message.updateSuccess"));
          this.initUserList();
          this.handleClose();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleClose() {
      this.closeDialog();
    },
  },
  watch: {
    dialogTable: {
      handler() {
        this.form = this.dialogTable;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style></style>
