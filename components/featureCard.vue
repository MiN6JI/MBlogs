<template>
  <div
    class="flex flex-col gap-6 p-[50px] border-1 bg-snow rounded-3xl border-gray-200"
  >
    <div
      class="p-[15px] bg-[var(--color-mint)] w-18 h-18 flex-center rounded-full"
    >
      <Icon :name="icon" class="size-8 text-[var(--color-text)]" />
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
