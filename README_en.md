# vue-markdown-pro

Vue3 Mobile Rich Text Editor

## Installation

```bash
    npm i vue-markdown-pro
    pnpm i vue-markdown-pro
    yarn add vue-markdown-pro
```

## Usage

```
// index.vue
<template>
  <MarkdownEditor :options="options" />
</template>
<script setup lang="ts">
  import { Editor } from 'vue-markdown-pro'
  const options = { content: '' }
</script>
```
