<template>
  <node-view-wrapper as="span" select-tag class="select-tag">
    <span contenteditable="false"> </span>
    <node-view-content as="span" class="select-tag-text"> </node-view-content>
    <span contenteditable="false"> </span>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'

const props = defineProps({
  ...nodeViewProps,
})
</script>

<style lang="less" scoped>
.select-tag {
  margin: 0 8px;
  display: inline-block;
  position: relative;
  color: rgb(22, 93, 255);
  background-color: rgb(232, 243, 255);
  padding: 6px 8px;
}
.select-tag-text {
}
</style>
