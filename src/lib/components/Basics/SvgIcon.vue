<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 1em;
}
.icon-code {
  vertical-align: 0;
}
</style>
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    // 使用iconfont 字体svg
    useIconFont: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    className: {
      type: String,
    },
  },
  computed: {
    iconName() {
      const prefix = this.useIconFont ? '' : 'icon-'
      return `#${prefix}${this.name}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
  },
}
</script>
