import type { Editor } from '@tiptap/core'
import TiptapBold from '@tiptap/extension-bold'
import CommandButton from '../components/Functionals/CommandButton.vue'

const Bold = TiptapBold.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      createComponent: ({ editor }: { editor: Editor }) => {
        return {
          component: CommandButton,
          componentProps: {
            command: editor.chain().focus().toggleBold().run,
            isActive: editor.isActive('bold'),
            icon: 'bold',
            title: 'bold',
          },
        }
      },
    }
  },
})

export default Bold
