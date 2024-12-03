import { Plugin } from 'vue'
import ArcoTiptap from './components/ArcoTiptap.vue'

const ArcoTiptapPlugin: Plugin = (app) => {
  app.component('ArcoTiptap', ArcoTiptap)
}

export { ArcoTiptap, ArcoTiptapPlugin }

export default ArcoTiptapPlugin
