<template>
  <div class="flex flex-col gap-6 p-2">
    <div class="flex-center aspect-1">
      <img
        src="https://picsum.photos/1920/1280"
        class="rounded-[15px]"
        alt="postImage"
      />
    </div>
    <div class="flex flex-col gap-5 pt-4">
      <div class="font-bold" v-if="post">
        <Nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</Nuxt-link>
      </div>

      <div v-else>Loading...</div>
      <p class="normal-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus,
        voluptates.
      </p>
    </div>
  </div>
</template>
<script setup>
const { post } = defineProps({
  post: Object,
  required: true,
});
</script>
