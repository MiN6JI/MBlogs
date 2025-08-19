<template>
  <div class="pt-18">
    <UContainer class="flex flex-col items-center gap-8">
      <!-- Heading + Paragraph -->
      <div class="flex flex-col gap-4 text-center">
        <div
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug"
        >
          Discover Stories Worth Reading
        </div>
        <p
          class="max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-muted"
        >
          Every blog offers a unique glimpse into someone’s world — a space
          where thoughts unfold, experiences are shared, and personal stories
          come to life.
        </p>
      </div>

      <!-- Posts Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 w-full"
      >
        <div
          v-for="post in posts.data.slice(0, 3)"
          :key="post.id"
          class="flex justify-center"
        >
          <SinglePost
            :postImage="post.feature_image"
            :postLink="`/posts/${post.id}`"
            :postTitle="post.title"
          />
        </div>
      </div>

      <!-- CTA Button -->
      <UButton
        size="lg"
        color="secondary"
        class="rounded-full px-6"
        label="Read More"
        to="/blogs"
      />
    </UContainer>
  </div>
</template>

<script setup>
const { $apiFetch } = useNuxtApp();
const posts = await $apiFetch("/api/posts");
</script>
