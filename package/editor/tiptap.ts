import { Editor, type EditorOptions } from '@tiptap/vue-3'
import Underline from '@tiptap/extension-underline'
import { Color } from '@tiptap/extension-color'
import {TextStyle} from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import {Table} from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import { Markdown } from 'tiptap-markdown'
import MarkdownMermaid from 'vue-tiptap-mermaid'
import { EditorContent } from '@tiptap/vue-3'

function getMarkdownEditor(options?: Partial<EditorOptions>): Editor {
  const markdownEditor = new Editor({
    extensions: [
      StarterKit,
      Underline,
      Color,
      TextStyle,
      Highlight.configure({
        multicolor: true // 启用多颜色支持
      }),
      Table.configure({
        resizable: false,
        HTMLAttributes: {
          class: 'tiptap-markdown-table',
          contenteditable: false
        }
      }),
      TableRow.configure({
        HTMLAttributes: {
          class: 'tiptap-table-row',
          contenteditable: false // 禁用表格行编辑
        }
      }),
      TableCell.configure({
        HTMLAttributes: {
          class: 'tiptap-table-cell',
          contenteditable: false // 禁用单元格编辑
        }
      }),
      TableHeader.configure({
        HTMLAttributes: {
          class: 'tiptap-table-header',
          contenteditable: false // 禁用表头编辑
        }
      }),
      Markdown.configure({
        html: true,
        tightLists: true,
        tightListClass: 'tight',
        bulletListMarker: '-',
        linkify: false,
        breaks: false,
        transformPastedText: true,
        transformCopiedText: true
      }),
      MarkdownMermaid
    ],
    ...(options || {})
  })
  return markdownEditor
}

export default getMarkdownEditor

export { Editor, EditorContent }
export type { EditorOptions }
