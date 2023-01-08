<template>
  <div id="guide" @click="handleGuide">
    <svg-icon icon="guide"></svg-icon>
  </div>
</template>

<script>
import Driver from "driver.js";
export default {
  data() {
    return {
      driver: {},
    };
  },
  methods: {
    handleGuide() {
      this.driver.defineSteps(this.steps());
      this.driver.start();
    },
    initDriver() {
      this.driver = new Driver({
        animate: true, // Whether to animate or not
        opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
        padding: 10, // Distance of element from around the edges
        allowClose: true, // Whether the click on overlay should close or not
        overlayClickNext: false, // Whether the click on overlay should move next
        doneBtnText: this.$i18n.t("driver.doneBtnText"), // Text on the final button
        closeBtnText: this.$i18n.t("driver.closeBtnText"), // Text on the close button for this step
        stageBackground: "#ffffff", // Background color for the staged behind highlighted element
        nextBtnText: this.$i18n.t("driver.nextBtnText"), // Next button text for this step
        prevBtnText: this.$i18n.t("driver.prevBtnText"), // Previous button text for this stepible, pass here the options for it if you want any
      });
    },
    steps() {
      return [
        {
          element: "#guide",
          popover: {
            title: this.$i18n.t("driver.guideBtn"),
            description: "Body of the popover",
            position: "left",
          },
        },
        {
          element: "#hamburger",
          popover: {
            title: this.$i18n.t("driver.hamburgerBtn"),
            description: "Body of the popover",
            position: "right",
          },
        },
        {
          element: "#fullscreen",
          popover: {
            title: this.$i18n.t("driver.fullScreen"),
            description: "Body of the popover",
            position: "left",
          },
        },
        {
          element: "#lang",
          popover: {
            title: this.$i18n.t("driver.lang"),
            description: "Body of the popover",
            position: "left",
          },
        },
      ];
    },
  },
  watch: {
    "$store.getters.lang": {
      handler() {
        this.initDriver();
      },
    },
  },
  mounted() {
    this.initDriver();
  },
};
</script>

<style></style>
