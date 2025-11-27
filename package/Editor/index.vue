<template>
  <editor-content :editor="editor" />
</template>

<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3'
import type { Editor, EditorOptions } from '@tiptap/vue-3'
import getMarkdownEditor from './tiptap'
import './index.scss'

const props = defineProps<{
  options?: Partial<EditorOptions>
}>()
const editor: Editor = getMarkdownEditor(props.options)

defineExpose({
  editor
})
</script>

<style scoped></style>
