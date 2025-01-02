import Highlight from '@tiptap/extension-highlight'

const CustomHighlight = Highlight.extend({
  toDOM() {
    return [
      'mark',
      { style: 'padding: 4px 0px; margin: 0 0px; background-color: yellow; color: red;' },
      0,
    ]
  },
  parseHTML() {
    return [{ tag: 'mark' }]
  },
})

export default CustomHighlight
