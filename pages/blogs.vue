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
        <div class="flex-row-center flex-wrap">
          <div
            v-for="post in posts"
            :key="post.id"
            class="w-1/3"
          >
            <SinglePost :post="post" />
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
<script setup>
import { onMounted } from "vue";
const route = useRoute();
const { $apiFetch } = useNuxtApp();

const posts = ref([]);

// const posts = await $apiFetch("/api/posts");

onMounted(async () => {
  const allPosts = await $apiFetch("/api/posts");
  posts.value = allPosts.slice(0, 6);
});

// const { data: posts } = await useFetch("/api/posts", {
//   baseURL: "http://127.0.0.1:8000",
// });

const items = [
  { label: "Home", to: "/" },
  { label: "Blogs", to: "/blogs" },
];
</script>
