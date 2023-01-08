<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="7"
          ><el-input
            v-model="queryForm.query"
            :placeholder="$t('table.placeholder')"
          ></el-input>
        </el-col>
        <el-button @click="searchUser" type="primary" icon="el-icon-search">{{
          $t("table.search")
        }}</el-button>
        <el-button type="primary" @click="openDialog()">{{
          $t("table.adduser")
        }}</el-button>
      </el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          v-for="item in tableFields"
          :key="item.prop"
          :prop="item.prop"
          :label="$t(`table.${item.label}`)"
          :width="item.width"
        >
          <template v-slot="{ row }" v-if="item.prop === 'mg_state'">
            <el-switch v-model="row.mg_state" @change="changeState(row)">
            </el-switch>
          </template>
          <template v-slot="{ row }" v-else-if="item.prop === 'create_time'">{{
            $filters(row.create_time)
          }}</template>
          <template v-slot="{ row }" v-else-if="item.prop === 'action'">
            <el-button
              @click="openDialog(row)"
              type="primary"
              icon="el-icon-edit"
              size="small"
            ></el-button>
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="small"
            ></el-button>
            <el-button
              @click="handleDelUser(row)"
              type="danger"
              icon="el-icon-delete"
              size="small"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryForm.pagenum"
        :page-sizes="[2, 5, 10, 15]"
        :page-size="queryForm.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <Dialog
      :dialogVisible="dialogVisible"
      :closeDialog="closeDialog"
      :title="title"
      :dialogTable="dialogTable"
      :initUserList="initUserList"
    />
  </div>
</template>

<script>
import Dialog from "./components/dialog.vue";
import { options } from "./options";
import { getUser, changeUserState, delUser } from "@/api/users";
import { isNull } from "@/utils/filters";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      queryForm: JSON.parse(localStorage.getItem("queryForm")) || {
        query: "",
        pagenum: 1,
        pagesize: 2,
      },
      total: 0,
      tableData: [],
      dialogVisible: false,
      title: "",
      dialogTable: {},
    };
  },
  computed: {
    //表单字段
    tableFields() {
      return options;
    },
  },
  mounted() {
    this.initUserList();
  },
  methods: {
    changeState(row) {
      changeUserState(row.id, row.mg_state)
        .then(() => {
          this.$message(this.$t("message.updateSuccess"));
        })
        .catch((err) => {
          this.$message(err);
        });
    },
    //打开dialog
    openDialog(row) {
      if (isNull(row)) {
        this.title = "添加新用户";
        this.dialogTable = {};
      } else {
        this.title = "编辑用户";
        this.dialogTable = JSON.parse(JSON.stringify(row));
      }
      this.dialogVisible = true;
    },
    // 关闭dialog
    closeDialog() {
      this.dialogVisible = false;
    },
    //初始化数据
    async initUserList() {
      const data = await getUser(this.queryForm);
      this.total = data.total;
      this.tableData = data.users;
    },
    //搜索用户
    searchUser() {
      this.initUserList();
      localStorage.setItem("queryForm", JSON.stringify(this.queryForm));
    },
    handleDelUser(row) {
      this.$confirm(this.$t("dialog.deleteTitle"), "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await delUser(row.id);
          this.initUserList();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //每页展示数量发生变化执行
    handleSizeChange(size) {
      this.queryForm.pagenum = 1;
      this.queryForm.pagesize = size;
      localStorage.setItem("queryForm", JSON.stringify(this.queryForm));
      this.initUserList();
    },
    //页码发生变化执行
    handleCurrentChange(page) {
      this.queryForm.pagenum = page;
      localStorage.setItem("queryForm", JSON.stringify(this.queryForm));
      this.initUserList();
    },
  },
};
</script>

<style lang="scss" scoped>
.el-pagination {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
