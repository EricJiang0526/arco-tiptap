<template>
  <div>
    <component
      v-for="spec in menuBarSpecs"
      :is="spec.component"
      v-bind="spec.componentProps"
    ></component>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Editor } from '@tiptap/core'
import { formatMenuInput } from '../../utils/format-input'

const props = defineProps({
  editor: {
    type: Editor,
  },
  menuBar: {
    type: [String, Array<String>],
    required: true,
  },
})

const menuBarSpecs = computed(() => {
  const extensions = props.editor?.extensionManager.extensions || []
  const componentSpecNameList = formatMenuInput(props.menuBar)

  return componentSpecNameList
    .map((name) => extensions?.find((ext) => ext.name === name))
    .filter((item) => !!item)
    .reduce((acc, extension) => {
      const { createComponent } = extension?.options

      if (typeof createComponent !== 'function') {
        return acc
      }
      const componentSpec = createComponent({ editor: props.editor })
      if (Array.isArray(componentSpec)) {
        return [...acc, ...componentSpec]
      }
      return [...acc, componentSpec]
    }, [])
})
</script>
