<template>
  <div class="arco-tiptap">
    <MenuBar v-if="editor" :editor="editor" :menu-bar="menuBar"></MenuBar>
    <EditorContent :editor="editor"></EditorContent>
    {{ menuBar }}
  </div>
</template>

<script lang="ts" setup>
import { shallowRef, onMounted, ref, computed } from 'vue'
import { Editor, useEditor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import TextStyle from '@tiptap/extension-text-style'
import Bold from '../extensions/bold'
import FontSize from '../extensions/font-size'

import MenuBar from './MenuBar/index.vue'
import { DEFAULT_MENU_BAR } from '../constants'

const props = defineProps({
  menuBar: {
    type: [String, Array<String>],
    default: DEFAULT_MENU_BAR,
  },
})

const editor = useEditor({
  content: '',
  extensions: [Document, Text, Paragraph, TextStyle, Bold, FontSize],
})
</script>
