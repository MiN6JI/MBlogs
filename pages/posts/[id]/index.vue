<template>
  <UContainer class="p-4 md:p-10">
    <div
      class="p-6 md:p-10 w-full flex flex-col items-center rounded-xl bg-muted"
    >
      <div class="w-full md:w-4/5 lg:w-3/5">
        <div>
          <!-- Top Row -->
          <div
            class="w-full flex flex-col md:flex-row py-4 md:py-6 gap-2 md:gap-0"
          >
            <div class="w-full md:w-1/2">
              <div class="text-gray normal-text">
                {{ format(new Date(post.created_at), "MMMM dd, yyyy") }}
              </div>
            </div>
            <div class="w-full md:w-1/2 flex md:justify-end">
              <div
                class="inline text-xs font-medium py-1 px-4 rounded-2xl bg-[var(--color-mint)]"
              >
                Blog Tags
              </div>
            </div>
          </div>

          <!-- Title -->
          <div class="py-2 w-full">
            <h1
              class="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug"
            >
              {{ post.title }}
            </h1>
          </div>

          <!-- Featured Image -->
          <div>
            <img
              :src="post.feature_image"
              alt="blog posts"
              class="rounded-xl w-full object-cover"
            />
          </div>
        </div>

        <!-- Post Body -->
        <div
          class="dark:text-muted max-w-none py-6 tiptap"
          v-html="post.body"
        ></div>
      </div>
    </div>
  </UContainer>

  <!-- Related Posts -->
  <UContainer>
    <div class="flex flex-col gap-4 text-center pb-4">
      <div
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug"
      >
        Find Your Next Read
      </div>
      <p
        class="max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-muted"
      >
        Thoughts, reflections, and voices that connect us all.
      </p>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 w-full"
    >
      <div
        v-for="post in otherPosts.data.slice(0, 3)"
        :key="post.id"
        class="flex justify-center"
      >
        <SinglePost
          :postImage="post.feature_image"
          :postLink="`/posts/${post.id}`"
          :postTitle="post.title"
          :postExcept="createExcerpt(post.body, 100)"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import { format } from "date-fns";

const route = useRoute();
const randomItem = ref(null);
const { $apiFetch } = useNuxtApp();

const post = await $apiFetch(`api/posts/${route.params.id}`);

const otherPosts = await $apiFetch("/api/posts");

const createExcerpt = (htmlBody, length = 100) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlBody;
  const plainText = tempDiv.textContent || tempDiv.innerText || "";
  return plainText.length > length
    ? plainText.slice(0, length).trim() + "..."
    : plainText;
};
</script>
