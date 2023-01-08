<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="avatarUrl"></el-avatar>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="handleLogOut">退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F13%2F20210613235426_7a793.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1675758523&t=ce25195c7667e7133899d81c8f20da9d",
    };
  },
  methods: {
    handleLogOut() {
      console.log("1");
      this.$store.dispatch("app/logOut");
    },
  },
};
</script>

<style></style>
