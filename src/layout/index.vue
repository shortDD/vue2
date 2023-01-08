<template>
  <el-container>
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header><Headers /></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from "./menu/index.vue";
import Headers from "./headers/index.vue";
export default {
  components: {
    Menu,
    Headers,
  },
};
</script>

<style lang="scss" scoped>
.el-aside {
  width: auto !important;
}
.el-header {
  height: auto !important;
  padding: 0;
}
</style>
