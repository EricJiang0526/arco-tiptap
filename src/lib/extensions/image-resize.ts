import type { Editor } from '@tiptap/core'
import TiptapImage from '@tiptap/extension-image'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import ImageNodeView from '../components/NodeViews/ImageNodeView.vue'

const Image = TiptapImage.extend({
  inline() {
    return true
  },

  group() {
    return 'inline'
  },
  addNodeView() {
    return VueNodeViewRenderer(ImageNodeView)
  },
})

export default Image
