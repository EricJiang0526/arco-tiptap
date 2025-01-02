<template>
  <button @click="editor?.chain().insertContent(content).focus().run">highlight</button>
  <button @click="addWord('头晕')">头晕</button>
  <button>眼花</button>
  <button>耳鸣</button>
  <div style="width: 300px; height: 200px; margin: 40px">
    <EditorContent :editor="editor" ref="editorRef"></EditorContent>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Editor, useEditor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import TextStyle from '@tiptap/extension-text-style'
import SelectTag from './extensions/select-tag'

const name = ref('')
const tag = ref([])

const editor = useEditor({
  content: '',
  extensions: [Document, Paragraph, Text, TextStyle, SelectTag],
})

const content = `帮我为<select-tag>王六</select-tag>这位患者生成一份健康报告，患者的标签特征有333<span id="what"> </span><select-tag>头晕</select-tag><select-tag>耳鸣</select-tag>，报告内容包括基本信息、健康史、健康状况评估、健康建议、注意事项等。`

const editorRef = ref(null)

const addWord = (word) => {
  console.log(editorRef.value.rootEl)

  const n = editorRef.value.rootEl.querySelector('#what')
  if (n) {
    console.log(333, n)
    console.log(n.pmViewDesc.spec.getPos())
  }
}
</script>
