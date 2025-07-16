<template>
  <div class="py-18">
    <UContainer class="flex-col-center gap-8">
      <div class="flex flex-col gap-4 text-center">
        <div class="text-4xl font-medium">Best Choice For Your Business</div>
        <p class="w-[60vw]">
          Gain real-time insights into your payment flows with our intuitive
          platform. Our advanced tools help you optimize transactions and
          enhance customer satisfaction.
        </p>
      </div>
      <div class="flex-justify pt-6">
        <div
          v-for="post in posts.data.slice(0, 3)"
          :key="post.id"
          class="w-1/3"
        >
          <SinglePost
            :postImage="post.feature_image"
            :postLink="`/posts/${post.id}`"
            :postTitle="post.title"
          />
          <!-- :postExcept="createExcerpt(post.body, 100)" -->
        </div>
      </div>
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
