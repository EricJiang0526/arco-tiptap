<template>
  <div class="editor-container">
    <EditorContent :editor="editor"></EditorContent>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Editor, useEditor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import TextStyle from '@tiptap/extension-text-style'
import History from '@tiptap/extension-history'
import SelectTag from '../extensions/select-tag'

const editor = useEditor({
  content: '',
  extensions: [Document, Paragraph, Text, TextStyle, History, SelectTag],
  onCreate() {},
})

const addParagraph = () => {
  const content = `帮我为<select-tag nodeType="2">王六</select-tag>这位患者生成一份健康报告，患者的标签特征有<select-tag nodeType="1">头晕</select-tag><span></span><select-tag nodeType="1">耳鸣</select-tag>，报告内容包括基本信息、健康史、健康状况评估、健康建议、注意事项等。`
  editor.value?.chain().insertContent(content).focus().run()
}

const addWord = (word) => {
  const selectTagNodeWraps = []
  editor.value?.state.doc.descendants((node, pos) => {
    if (node.attrs?.nodeType === 1) {
      selectTagNodeWraps.push({
        node,
        pos,
      })
    }
  })

  if (!selectTagNodeWraps.length) {
    editor.value
      ?.chain()
      .focus()
      .insertContent(`，患者的标签特征有<span></span><select-tag nodeType="1">${word}</select-tag>`)
      .run()
    return
  }

  const foundWrap = selectTagNodeWraps.find(({ node }) => node.textContent === word)
  if (foundWrap) {
    editor.value?.commands.deleteRange({
      from: foundWrap.pos,
      to: foundWrap.pos + foundWrap.node.nodeSize,
    })
  } else {
    const lastWrap = selectTagNodeWraps[selectTagNodeWraps.length - 1]
    const position = lastWrap.pos + lastWrap.node.nodeSize
    editor.value?.commands.insertContentAt(
      position,
      `<span></span><select-tag nodeType="1">${word}</select-tag>`,
    )
  }
}

const getText = () => editor.value?.state.doc.textContent

defineExpose({ addWord, addParagraph, getText })
</script>

<style lang="less" scoped>
.editor-container {
  padding: 0 16px;
  border: 1px solid black;
  border-radius: 8px;
  :deep(.tiptap) {
    outline: none;
    line-height: 24px;
  }
}
</style>
