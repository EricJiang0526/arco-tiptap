<template>
  <button @click="addParagraph">新增一段话</button>
  <button @click="addWord('头晕')">头晕</button>
  <button @click="addWord('眼花')">眼花</button>
  <button @click="addWord('耳鸣')">耳鸣</button>
  <button>自定义</button>
  <button @click="getText">获取纯文本</button>
  <div style="width: 300px; height: 200px; margin: 40px">
    <Editor ref="editorRef"></Editor>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Editor from './components/editor.vue'

const editorRef = ref(null)

const addParagraph = () => {
  editorRef.value?.addParagraph()
}

const addWord = (...args) => {
  editorRef.value?.addWord(...args)
}

const getText = () => {
  const text = editorRef.value?.getText()
  console.log(text)
}
</script>
