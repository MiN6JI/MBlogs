<template>
  <!-- <pre>{{ posts }}</pre> -->
  <UContainer class="flex-center">
    <UCard variant="solid" class="bg-[var(--color-text)] py-3 w-[80%]">
      <div class="w-full flex flex-row">
        <div class="w-1/5 flex-center">
          <img
            src="/public/user.png"
            alt="Profile Images"
            class="w-[100px] h-[100px] object-cover rounded-full"
          />
        </div>
        <div class="w-3/5 flex flex-col justify-center gap-3">
          <div class="text-4xl font-bold text-white">{{ user.name }}</div>
          <div class="text-white">{{ user.email }}</div>
        </div>
        <div class="w-1/5 flex-center">
          <UButton label="Create Post" size="xl" to="/posts/create" />
        </div>
      </div>
    </UCard>
  </UContainer>
  <UContainer class="bg-gray-100">
    <div class="sub-heading text-center">Your Posts</div>
    <div class="bg-white rounded-xl p-10" v-if="posts.length != 0">
      <div
        class="flex flex-row w-full gap-6 p-4"
        v-for="(post, index) in posts"
        :key="index"
      >
        <div class="w-1/5">
          <!-- <img
            src="https://picsum.photos/1920/1280"
            class="rounded-[10px]"
            alt="Post Images"
          /> -->
          <img
            :src="post.feature_image"
            class="rounded-[10px] object-cover"
            alt="Post Images"
          />
        </div>
        <div class="w-3/5 flex flex-col gap-4">
          <div class="text-2xl font-bold">{{ post.title }}</div>
          <div
            class="normal-text"
            v-html="
              post.body
                ? post.body.replace(/<[^>]*>/g, '').slice(0, 200) +
                  (post.body.length > 200 ? '...' : '')
                : ''
            "
          ></div>
        </div>
        <div class="w-1/5 flex-center gap-4">
          <UButton
            icon="ic:sharp-remove-red-eye"
            class="p-2 rounded-full"
            size="md"
            color="primary"
            variant="soft"
            :to="`/posts/${post.id}`"
          />
          <UButton
            icon="mdi:pencil"
            class="p-2 rounded-full"
            size="md"
            color="secondary"
            variant="soft"
            :to="`/posts/${post.id}/edit`"
            />
            <UButton
            icon="material-symbols:delete-outline"
            class="p-2 rounded-full"
            size="md"
            color="error"
            variant="soft"
            :to="`/posts/${post.id}/delete`"
          />
        </div>
      </div>
    </div>
    <!-- OR -->
    <div
      v-else
      class="bg-white rounded-xl text-center h-screen flex flex-col justify-center gap-4"
    >
      <div>You haven't created any articles yet.</div>
      <div>
        <UButton label="Create Post" to="/posts/create" />
      </div>
    </div>
  </UContainer>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});

const { $apiFetch } = useNuxtApp();
const user = ref([]);
const posts = ref([]);

onMounted(async () => {
  const response = await $apiFetch("/api/user");
  user.value = response;

  posts.value = await $apiFetch("api/user/posts");
});
</script>
