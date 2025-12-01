# vue-markdown-pro

vue3 markdown编辑器

[English](https://github.com/wxuanwx/vue-markdown-pro/blob/master/README_en.md)

## 安装

    npm i vue-markdown-pro
    pnpm i vue-markdown-pro
    yarn add vue-markdown-pro

## 使用

```
// index.vue
<template>
  <MarkdownEditor :options="options" :class="className" @mouseup="onMouseup" @mousedown="onMousedown" />
</template>
<script setup lang="ts">
  import 'vue-markdown-pro/lib/index.css'
  import { MarkdownEditor } from 'vue-markdown-pro'
  const options = { content: '' }
  const className = 'markdown-editor-container'
  const onMouseup = (e: MouseEvent) => {}
  const onMousedown = (e: MouseEvent) => {}
</script>
```
