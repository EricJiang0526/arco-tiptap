import type { Editor } from '@tiptap/core'
import { Extension } from '@tiptap/core'
import CommandDropdown from '../components/Functionals/CommandDropdown.vue'
import { DEFAULT_FONT_SIZE, FONT_SIZE_OPTIONS } from '../constants'

const FontSize = Extension.create({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle'],
      createComponent: ({ editor }: { editor: Editor }) => {
        return {
          component: CommandDropdown,
          componentProps: {
            command: (val: String) => {
              editor.chain().focus().setFontSize(val).run()
            },
            modelValue: editor.getAttributes('textStyle').fontSize,
            options: FONT_SIZE_OPTIONS.map((option) => ({
              value: option,
              label: option,
            })),
          },
        }
      },
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize || null,
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {}
              }
              return {
                style: `font-size: ${attributes.fontSize}`,
              }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
        ({ chain }) => {
          return chain().setMark('textStyle', { fontSize }).run()
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain().setMark('textStyle', { fontSize: null }).run()
        },
    }
  },

  onCreate() {
    this.editor.commands.setFontSize(DEFAULT_FONT_SIZE)
  },
})

export default FontSize
