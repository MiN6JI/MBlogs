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
      <img src="https://picsum.photos/1920/1280" alt="postImage" />

      <template #footer>
        <div class="flex flex-col gap-4">
          <div class="font-bold leading-1.6" v-if="post">
            <Nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</Nuxt-link>
          </div>
          <p class="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, voluptates.
          </p>
        </div>
      </template>
    </UCard>
  </div>
</template>
<script setup>
const { post } = defineProps({
  post: Object,
  required: true,
});
</script>
