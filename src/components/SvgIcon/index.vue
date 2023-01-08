<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      require: true,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`;
    },
  },
};
</script>

<style lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
