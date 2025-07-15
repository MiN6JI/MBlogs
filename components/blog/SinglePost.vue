<template>
  <div class="p-4">
    <UCard
      variant="soft"
      class="w-full rounded-2xl"
      :ui="{
        body: 'p-0 sm:p-0',
        footer: 'p-4 sm:p-4 bg-elevated',
      }"
    >
      <img :src="postImage" alt="postImage" />

      <template #footer>
        <div class="flex flex-col gap-4">
          <div class="text-xl font-bold leading-1.6">
            <!-- <Nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</Nuxt-link> -->
            <Nuxt-link :to="postLink">{{ postTitle }}</Nuxt-link>
          </div>
          <p class="text-sm leading-5">{{ postExcept }}</p>
        </div>
      </template>
    </UCard>
  </div>
</template>
<script setup>
defineProps({
  postImage: String,
  postTitle: String,
  postLink: String,
  postExcept: String,
});
</script>
