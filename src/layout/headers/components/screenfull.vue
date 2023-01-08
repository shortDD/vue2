<template>
  <div class="screenfull" @click="toggleScreenfull" id="fullscreen">
    <svg-icon
      :icon="isScreenfull ? 'exit-fullscreen' : 'fullscreen'"
    ></svg-icon>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      isScreenfull: false,
    };
  },
  methods: {
    toggleScreenfull() {
      screenfull.toggle();
    },
    changeIcon() {
      this.isScreenfull = screenfull.isFullscreen;
    },
  },
  mounted() {
    screenfull.on("change", this.changeIcon);
  },
};
</script>

<style></style>
