<template>
  <node-view-wrapper as="span" select-tag :class="['select-tag']">
    <span contenteditable="false">&nbsp;</span>

    <node-view-content as="span" select-tag-text class="select-tag-text"> </node-view-content>

    <span contenteditable="false">&nbsp;</span>
    <span contenteditable="false">
      {{ node.attrs.placeholder }}
      <span contenteditable="false">&nbsp;</span>
    </span>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'

const props = defineProps(nodeViewProps)
</script>

<style lang="less" scoped>
.select-tag {
  // margin: 0 4px;
  // padding: 2px 0px;
  display: inline-block;
  position: relative;
  color: rgb(22, 93, 255);
  background-color: rgb(232, 243, 255);
  line-height: 20px;
  border-radius: 4px;
  min-width: 20px;
}
.select-tag-text {
}
</style>
