<template>
  <el-breadcrumb separator="/" style="margin-left: 15px">
    <el-breadcrumb-item
      v-for="item in breadcrumbList"
      :key="item.path"
      :to="{ path: item.path === '' ? '/' : item.path }"
      >{{ $t(`menus.${item.name}`) }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
export default {
  computed: {
    breadcrumbList() {
      return this.$route.matched;
    },
  },
};
</script>

<style></style>
