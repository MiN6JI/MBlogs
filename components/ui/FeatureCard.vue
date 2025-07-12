<template>
  <div
    class="rounded-3xl flex flex-col gap-6 p-[50px] bg-white dark:bg-[var(--color-eerie-950)] border-1 border-muted"
  >
    <div class="p-[15px] bg-primary w-18 h-18 flex-center rounded-full">
      <UIcon name="i-lucide-lightbulb" class="size-8 text-secondary" />
    </div>
    <div class="flex flex-col gap-2">
      <div class="small-heading">{{ title }}</div>
      <p class="normal-text">{{ information }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  icon: {
    type: String,
    default: "mdi-help-circle-outline",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
});
</script>
