<template>
  <div>
    <div class="navbar">
      <div class="l-container">
        <Hamburger />
        <BreadCrumb />
      </div>
      <div class="r-container">
        <Driver class="nav-item" />
        <ScreenFull class="nav-item" />
        <Lang class="nav-item" />
        <Avatar />
      </div>
    </div>
    <div class="tags">
      <Tags />
    </div>
  </div>
</template>
<script>
import Hamburger from "./components/hamburger.vue";
import BreadCrumb from "./components/breadCrumb.vue";
import Avatar from "./components/avatar.vue";
import Lang from "./components/lang.vue";
import ScreenFull from "./components/screenfull.vue";
import Driver from "./components/driver/index.vue";
import Tags from "./components/tags.vue";
export default {
  components: { Hamburger, BreadCrumb, Avatar, Lang, ScreenFull, Driver, Tags },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  .l-container,
  .r-container {
    display: flex;
    align-items: center;

    .nav-item {
      margin-right: 16px;
      font-size: 22px;
      color: $iconGray;
      cursor: pointer;
    }
  }
}
.tags {
  padding: 0 16px;
  margin-top: 20px;
}
</style>
