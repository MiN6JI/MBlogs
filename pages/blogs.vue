<template>
  <UContainer
    class="bg-gray-100 py-20 w-full h-[200px] flex flex-col justify-center items-center gap-5 text-center"
  >
    <div class="text-4xl font-semibold capitalize">{{ route.name }}</div>
    <UBreadcrumb :items="items" class="normal-text" />
  </UContainer>
  <UContainer>
    <div class="flex-justify px-30 py-10 flex-wrap">
      <div v-for="post in posts" :key="post.id" class="w-1/2">
        <SinglePost :post="post" />
      </div>
    </div>
  </UContainer>
</template>
<script setup>
const route = useRoute();
const { $apiFetch } = useNuxtApp();

const posts = await $apiFetch("/posts");

// const { data: posts } = await useFetch("/api/posts", {
//   baseURL: "http://127.0.0.1:8000",
// });

const items = [
  { label: "Home", icon: "i-lucide-house", to: "/" },
  { label: "Blogs", icon: "i-lucide-box", to: "/blogs" },
];
</script>
