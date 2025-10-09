<template>
  <section
    v-if="editor"
    class="bg-white dark:bg-muted rounded-tr-md rounded-tl-md flex items-center flex-wrap gap-x-4 border-t-1 border-l-1 border-r-1 border-muted outline-1 outline-[#dee7f2] p-4"
  >
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="material-symbols:format-bold"
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{ 'bg-active': editor.isActive('bold') }"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="material-symbols:format-italic"
      @click="editor.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="{ 'bg-accented': editor.isActive('italic') }"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="material-symbols:strikethrough-s"
      @click="editor.chain().focus().toggleStrike().run()"
      :disabled="!editor.can().chain().focus().toggleStrike().run()"
      :class="{ 'bg-accented': editor.isActive('strike') }"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="fluent:line-horizontal-1-20-filled"
      @click="editor.chain().focus().setHorizontalRule().run()"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="ic:baseline-code"
      @click="editor.chain().focus().toggleCode().run()"
      :disabled="!editor.can().chain().focus().toggleCode().run()"
      :class="{ 'bg-accented': editor.isActive('code') }"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="ic:baseline-format-list-bulleted"
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'bg-accented': editor.isActive('bulletList') }"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="ic:baseline-format-list-numbered"
      @click="editor.chain().focus().toggleOrderedList().run()"
      :class="{ 'bg-accented': editor.isActive('orderedList') }"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="material-symbols:format-h1"
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ 'bg-accented': editor.isActive('heading', { level: 1 }) }"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="material-symbols:format-h2"
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ 'bg-accented': editor.isActive('heading', { level: 2 }) }"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="material-symbols:format-quote"
      @click="editor.chain().focus().toggleBlockquote().run()"
      :class="{ 'bg-accented': editor.isActive('blockquote') }"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="mdi:undo"
      @click="editor.chain().focus().undo().run()"
      :disabled="!editor.can().chain().focus().undo().run()"
      class="p-1"
    />
    <UButton
      color="secondary"
      variant="soft"
      size="sm"
      icon="mdi:redo"
      @click="editor.chain().focus().redo().run()"
      :disabled="!editor.can().chain().focus().redo().run()"
      class="p-1"
    />
  </section>
  <editor-content
    :editor="editor"
    class="w-full"
  />
</template>

<script setup>
import { ref, watch } from "vue";
import { EditorContent, useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const editor = useEditor({
  content: props.modelValue,
  onUpdate({ editor }) {
    emit("update:modelValue", editor.getHTML());
  },
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
  editorProps: {
    attributes: {
      class:
        "max-w-none bg-white dark:bg-muted text-gray-800 dark:text-gray-100 rounded-br-md rounded-bl-md border border-muted outline-1 outline-[#dee7f2] px-4 pb-4 min-h-[12rem] max-h-[12rem] overflow-y-auto focus:outline-none",
    },
  },
});

watch(
  () => props.modelValue,
  (val) => {
    if (editor.value && val !== editor.value.getHTML()) {
      editor.value.commands.setContent(val);
    }
  }
);
</script>

<style scoped>
:deep(.tiptap:focus) {
  outline: 1px solid #fff;
  border: 1px solid #fff;
}

/* .tiptap blockquote {
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
}  */
</style>
