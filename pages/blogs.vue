<template>
  <UContainer>
    <div class="w-full flex flex-col gap-12 bg-muted py-12 px-6 rounded-3xl">
      <div class="flex flex-col gap-4">
        <div class="text-5xl font-semibold capitalize">{{ route.name }}</div>
        <UBreadcrumb
          separator-icon="ci:dot-03-m"
          :ui="{
            link: 'text-muted',
            separatorIcon: 'text-primary',
          }"
          :items="items"
          class="normal-text"
        />
      </div>
      <div class="w-full">
        <div class="flex flex-row flex-wrap">
          <div v-for="post in posts.data" :key="post.id" class="w-1/3">
            <SinglePost
              :postImage="post.feature_image"
              :postLink="`/posts/${post.id}`"
              :postTitle="post.title"
              :postExcept="createExcerpt(post.body, 100)"
            />
          </div>
        </div>
      </div>
    </div>
  </UContainer>
  <UContainer class="flex-row-center">
    <UPagination
      color="secondary"
      variant="soft"
      v-model:page="page"
      :page-count="Math.ceil(posts.total / posts.per_page)"
      :total="posts.total"
    />
  </UContainer>
</template>
<script setup>
import { onMounted, watchEffect } from "vue";
const route = useRoute();
const { $apiFetch } = useNuxtApp();

const createExcerpt = (htmlBody, length = 100) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlBody;
  const plainText = tempDiv.textContent || tempDiv.innerText || "";
  return plainText.length > length
    ? plainText.slice(0, length).trim() + "..."
    : plainText;
};

const posts = ref({ data: [] });
const page = ref(1);
const fetchPosts = async () => {
  posts.value = await $apiFetch(`/api/posts?page=${page.value}`);
};
watchEffect(fetchPosts);

// const posts = await $apiFetch("/api/posts");

// const { data: posts } = await useFetch("/api/posts", {
//   baseURL: "http://127.0.0.1:8000",
// });

const items = [
  { label: "Home", to: "/" },
  { label: "Blogs", to: "/blogs" },
];
</script>
