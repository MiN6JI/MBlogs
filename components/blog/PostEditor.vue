<template>
  <section
    v-if="editor"
    class="rounded-tr-md rounded-tl-md UButtons flex items-center flex-wrap gap-x-4 border-t-2 border-l-2 border-r-2 border-[#cad5e2] p-4"
  >
    <UButton
      color="neutral"
      variant="soft"
      icon="material-symbols:format-bold"
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{ 'bg-gray-200': editor.isActive('bold') }"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="material-symbols:format-italic"
      @click="editor.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="{ 'bg-gray-200': editor.isActive('italic') }"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="material-symbols:strikethrough-s"
      @click="editor.chain().focus().toggleStrike().run()"
      :disabled="!editor.can().chain().focus().toggleStrike().run()"
      :class="{ 'bg-gray-200': editor.isActive('strike') }"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="fluent:line-horizontal-1-20-filled"
      @click="editor.chain().focus().setHorizontalRule().run()"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="ic:baseline-code"
      @click="editor.chain().focus().toggleCode().run()"
      :disabled="!editor.can().chain().focus().toggleCode().run()"
      :class="{ 'bg-gray-200': editor.isActive('code') }"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="ic:baseline-format-list-bulleted"
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'bg-gray-200': editor.isActive('bulletList') }"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="ic:baseline-format-list-numbered"
      @click="editor.chain().focus().toggleOrderedList().run()"
      :class="{ 'bg-gray-200': editor.isActive('orderedList') }"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="material-symbols:format-h1"
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ 'bg-gray-200': editor.isActive('heading', { level: 1 }) }"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="material-symbols:format-h2"
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ 'bg-gray-200': editor.isActive('heading', { level: 2 }) }"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="material-symbols:format-quote"
      @click="editor.chain().focus().toggleBlockquote().run()"
      :class="{ 'bg-gray-200': editor.isActive('blockquote') }"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="mdi:undo"
      @click="editor.chain().focus().undo().run()"
      :disabled="!editor.can().chain().focus().undo().run()"
      class="p-1"
    />
    <UButton
      color="neutral"
      variant="soft"
      icon="mdi:redo"
      @click="editor.chain().focus().redo().run()"
      :disabled="!editor.can().chain().focus().redo().run()"
      class="p-1"
    />
  </section>
  <editor-content :editor="editor" class="prose"/>
</template>

<script setup>
import { Editor, EditorContent, useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = useEditor({
  editorProps: {
    attributes: {
      class:
        "rounded-br-md rounded-bl-md border border-[var(--color-text)] p-4 min-h-[12rem] max-h-[12rem] overflow-y-auto outline-none",
    },
  },
  content: `<p>I'm running Tiptap with Vue.js. 🎉</p>`,
  extensions: [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false,
      },
      blockquote: true,
      heading: {
        levels: [1, 2],
      },
      history: true, // Needed for undo/redo
    }),
  ],
});
</script>

<style>
.tiptap h1 {
  font-size: 1.75rem;
  font-weight: bold;
  margin: 1rem 0;
}

.tiptap h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.75rem 0;
}

.tiptap blockquote {
  border-left: 4px solid #ccc;
  padding-left: 1rem;
  color: #555;
  font-style: italic;
  margin: 1rem 0;
}

.tiptap ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

.tiptap ol {
  list-style-type: decimal;
  margin-left: 1.5rem;
}
</style>
