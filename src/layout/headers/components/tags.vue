<template>
  <div>
    <el-tag
      :key="tag"
      v-for="tag in $store.getters.tags"
      :closable="$store.getters.tags.length > 1"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="handleRouter(tag)"
      :effect="$route.path === `/${tag}` ? 'dark' : 'plain'"
    >
      {{ $t(`menus.${tag}`) }}
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleRouter(path) {
      this.$router.replace(path);
    },
    handleClose(path) {
      this.$store.commit("app/delTag", {
        tagPath: path,
        currentPath: this.$route.path,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 12px;
}
.el-tag {
  cursor: pointer;
}
</style>
