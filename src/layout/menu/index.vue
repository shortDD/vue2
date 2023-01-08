<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    :collapse="$store.getters.siderType"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened
    router
  >
    <el-submenu
      v-for="(item, index) in menuList"
      :key="item.id"
      :index="item.id + ''"
    >
      <template slot="title">
        <i :class="`el-icon-${icons[index]}`"></i>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        v-for="subItem in item.children"
        :key="subItem.id"
        :index="'/' + subItem.path"
        @click="handleClick(subItem.path)"
        >{{ $t(`menus.${subItem.path}`) }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
import { menuList } from "@/api/menu";
export default {
  data() {
    return {
      menuList: [],
      defaultActive: sessionStorage.getItem("defaultActive") || "/users",
      icons: ["user", "setting", "s-shop", "tickets", "pie-chart"],
    };
  },
  methods: {
    handleClick(path) {
      this.$store.commit("app/setTags", path);
    },
  },
  watch: {
    $route({ path }) {
      this.defaultActive = path;
      sessionStorage.setItem("defaultActive", path);
    },
  },
  async created() {
    this.menuList = await menuList();
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  background-color: $themeBlue;
  height: 100vh;
  border-right: none;
  ::v-deep .el-submenu__title:hover {
    background-color: $menuHover;
  }
  ::v-deep .el-menu-item:hover {
    background-color: $subMenuHover;
  }
  .el-menu-item {
    background-color: $themeBlue;
  }
}
</style>
