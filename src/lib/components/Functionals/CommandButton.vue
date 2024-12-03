<template>
  <a-tooltip placement="top" :content="title">
    <a-button :type="isActive ? 'primary' : 'secondary'" @mousedown.prevent @click="onClick">
      <svg-icon :name="icon"></svg-icon>
    </a-button>
  </a-tooltip>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  command: {
    type: [Function, null],
    default: null,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})

const onClick = () => {
  props.command?.()
}
</script>
