<template>
  <div class="hamburger-container" @click="handleHamburger" id="hamburger">
    <svg-icon
      :icon="$store.getters.siderType ? 'hamburger-closed' : 'hamburger-opened'"
    ></svg-icon>
  </div>
</template>

<script>
export default {
  methods: {
    handleHamburger() {
      this.$store.commit("app/changeSiderType");
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger-container {
  cursor: pointer;
}
</style>
