import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import SelectTagComponent from '../components/select-tag.vue'

const SelectTag = Node.create({
  name: 'selectTag',

  inline: true,

  group: 'inline',

  content: 'inline*',

  renderHTML({ HTMLAttributes }) {
    return ['select-tag', mergeAttributes(HTMLAttributes), 0]
  },

  // 解析 HTML
  parseHTML() {
    return [
      {
        tag: 'select-tag',
      },
    ]
  },

  addAttributes() {
    return {
      placeholder: {
        default: '展示',
      },
      nodeType: {
        default: 0,
      },
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(SelectTagComponent)
  },
})

export default SelectTag
