<template>
  <el-dropdown @command="handleToggleLang" id="lang">
    <span class="el-dropdown-link">
      <svg-icon icon="language"></svg-icon>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="$store.getters.lang === 'zh'" command="zh"
        >中文</el-dropdown-item
      >
      <el-dropdown-item :disabled="$store.getters.lang === 'en'" command="en"
        >English</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
  <!-- <div class="lang-container">
  </div> -->
</template>

<script>
export default {
  methods: {
    handleToggleLang(val) {
      this.$store.commit("app/changeLang", val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
