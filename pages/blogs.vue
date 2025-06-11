<template>
  <pre>{{ data.posts }}</pre>
  <UContainer
    class="bg-gray-100 py-20 w-full h-[200px] flex flex-col justify-center items-center gap-5 text-center"
  >
    <div class="text-4xl font-semibold capitalize">{{ route.name }}</div>
    <UBreadcrumb :items="items" class="normal-text" />
  </UContainer>
  <UContainer>
    <div v-if="pending" class="text-center py-10">
      <p>Loading posts...</p>
    </div>
    <div v-else-if="error" class="text-center py-10 text-red-500">
      <p>Error loading posts: {{ error.message }}</p>
    </div>
    <div v-else>
      <div class="flex flex-wrap justify-center px-30 py-10">
        <div
          v-for="post in currentPosts"
          :key="post.id"
          class="w-full sm:w-1/2 lg:w-1/3 p-4"
        >
          <SinglePost :post="post" />
        </div>
      </div>
    </div>

    <div class="flex-center">
      <UPagination
        v-model="page"
        :total="totalPosts"
        :page-count="postsPerPage"
        :to="(p: number) => ({ query: { page: p } })"
        show-first
        show-last
        :prev-button="{
          icon: 'i-heroicons-arrow-small-left-20-solid',
          label: 'Prev',
          color: 'gray',
        }"
        :next-button="{
          icon: 'i-heroicons-arrow-small-right-20-solid',
          trailing: true,
          label: 'Next',
          color: 'gray',
        }"
      />
    </div>
  </UContainer>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter, navigateTo } from "nuxt/app";

const route = useRoute();
const router = useRouter();

const postsPerPage = ref(6);

const page = computed({
  get() {
    // Read the 'page' query parameter from the URL, default to 1 if not present
    return Number(route.query.page?.toString()) || 1;
  },
  set(newPage) {
    // Update the URL's 'page' query parameter when the pagination component changes the page
    navigateTo({ query: { ...route.query, page: newPage }, replace: true });
  },
});

// Fetch posts from your API
const { data, pending, error } = await useAsyncData(
  "blog-posts",
  async () => {
    // Construct your API URL with the current page and limit
    const apiUrl = `/api/posts?page=${page.value}&limit=${postsPerPage.value}`;
    const response = await $fetch(apiUrl, {
      baseURL: `http://localhost:8000`, // Your API base URL
    });
    return response;
  },
  {
    // Crucially, watch for changes in the 'page' ref to re-fetch data
    watch: [page],
    // Transform the data to ensure we always have an object with posts and totalCount
    transform: (data) => ({
      posts: data?.posts || [],
      totalCount: data?.totalCount || 0,
    }),
  }
);

// Computed properties to extract posts and total count from the fetched data
const currentPosts = computed(() => data.value?.posts || []);
const totalPosts = computed(() => data.value?.totalCount || 0);

const items = [
  { label: "Home", icon: "i-lucide-house", to: "/" },
  { label: "Blogs", icon: "i-lucide-box", to: "/blogs" },
];
</script>
