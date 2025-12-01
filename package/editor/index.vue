<template>
  <editor-content :editor="editor" class="tiptap" :class="className" @mouseup="onMouseup" @mousedown="onMousedown"/>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Editor, EditorOptions } from '@tiptap/vue-3'
import getMarkdownEditor, { EditorContent } from './tiptap'
import './index.scss'

const props = defineProps<{
  options?: Partial<EditorOptions>
  classNames?: string[]
  className?: string
}>()

const emits = defineEmits<{
  (event: 'mousedown', e: MouseEvent): void
  (event: 'mouseup', e: MouseEvent): void
}>()
const onMouseup = (e: MouseEvent) => {
  emits('mouseup', e)
}
const onMousedown = (e: MouseEvent) => {
  emits('mousedown', e)
}
const className = computed(() => {
  return props.classNames?.join(' ') || props.className || ''
})
const editor: Editor = getMarkdownEditor(props.options)

defineExpose({
  editor
})
</script>

<style scoped></style>
