import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import SelectTagComponent from '../components/select-tag.vue'

const SelectTag = Node.create({
  name: 'selectTag',

  inline: true,

  group: 'inline',

  content: 'inline*',

  renderHTML({ HTMLAttributes, node }) {
    return [
      'span',
      {
        class: 'select-tag',
        style: `color: rgb(22, 93, 255);
                background-color: rgb(232, 243, 255);
                line-height: 20px;
                border-radius: 4px;
                min-width: 20px;`,
      },
      ['span', { contenteditable: 'false' }, ' '],
      ['span', { class: 'select-tag-text' }, 0],
      ['span', { contenteditable: 'false' }, ' '],
      [
        'span',
        {
          contenteditable: 'false',
          class: 'select-tag-placeholder',
          style: 'display: none',
        },
        HTMLAttributes.placeholder,
      ],
    ]
  },

  // 解析 HTML
  parseHTML() {
    return [
      {
        tag: 'span.select-tag',
      },
    ]
  },

  addAttributes() {
    return {
      ...this.parent?.(),
      placeholder: {
        default: '',
        parseHTML: (element) => element.getAttribute('placeholder'),
      },
      nodeType: {
        default: '0',
        parseHTML: (element) => element.getAttribute('node-type'),
      },
    }
  },

  onUpdate({ editor }) {
    editor.state.doc.descendants((node, pos) => {
      if (node.type.name === 'selectTag') {
        if (node.content.size === 0) {
          console.log(editor)
        }
      }
    })
  },

  // addNodeView() {
  //   return VueNodeViewRenderer(SelectTagComponent)
  // },
})

export default SelectTag
