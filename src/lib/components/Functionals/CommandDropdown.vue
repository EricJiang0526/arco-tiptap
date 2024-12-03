<template>
  <a-dropdown @select="onSelect">
    <a-button @mousedown.prevent>{{ modelValue }}</a-button>
    <template #content>
      <a-doption v-for="{ value, label } in options" :key="label" :value="value" @mousedown.prevent>
        {{ label }}
      </a-doption>
    </template>
  </a-dropdown>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  command: {
    type: [Function, null],
    default: null,
  },
  options: {
    type: Array,
    default: () => [],
  },
})

const onSelect = (val) => {
  console.log(val)
  props.command?.(val)
}
</script>
