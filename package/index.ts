import { Editor } from '@tiptap/vue-3'
import  getMarkdownEditor from './editor/tiptap'
import MarkdownEditor from './editor/index.vue'
import type { App } from 'vue'
const components = [MarkdownEditor]
const install = (Vue: App) => {
  components.map((component: any) => {
    Vue.component(component.__name as string, component)
  })
}

const windowObj = window as any
/* 支持使用标签的方式引入 */
if (typeof windowObj !== 'undefined' && windowObj.Vue) {
  const vm = windowObj.Vue.createApp({})
  install(vm)
}

export { MarkdownEditor, getMarkdownEditor, Editor }
export default { install }