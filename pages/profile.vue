<template>
  <UContainer class="flex-col-center gap-6">
    <UCard variant="solid" class="bg-secondary dark:bg-accented p-5 rounded-3xl w-full">
      <div class="w-full flex flex-row">
        <div class="w-1/5 flex-row-center">
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
        <div class="w-1/5 flex-row-center">
          <UButton
            class="rounded-full px-6"
            color="primary"
            label="Create Post"
            size="xl"
            to="/posts/create"
          />
        </div>
      </div>
    </UCard>

    <UCard variant="ghost" class="w-full">
      <div class="text-secondary text-5xl font-medium text-center py-10">
        Your Posts
      </div>
      <div
        class="bg-muted rounded-xl overflow-hidden"
        v-if="posts.length != 0"
      >
        <div
          class="flex flex-row w-full gap-6"
          v-for="(post, index) in posts"
          :key="index"
        >
          <div class="w-2/6">
            <img
              :src="post.feature_image"
              class="w-full h-full object-cover"
              alt="Post Images"
            />
          </div>
          <div class="w-4/6 flex flex-col justify-center gap-4">
            <div class="text-secondary text-2xl font-bold">
              {{ post.title }}
            </div>
            <div
              class="text-sm text-secondary"
              v-html="
                post.body
                  ? post.body.replace(/<[^>]*>/g, '').slice(0, 200) +
                    (post.body.length > 200 ? '...' : '')
                  : ''
              "
            ></div>
            <div class="flex flex-row gap-2">
              <UButton
                icon="ic:sharp-remove-red-eye"
                class="text-primary p-2 rounded-md"
                size="sm"
                color="primary"
                variant="outline"
                :to="`/posts/${post.id}`"
              />
              <UButton
                icon="mdi:pencil"
                class="p-2 text-secondary rounded-md"
                size="sm"
                color="secondary"
                variant="outline"
                :to="`/posts/${post.id}/edit`"
              />
              <UButton
                icon="material-symbols:delete-outline"
                class="p-2 text-error rounded-md"
                size="sm"
                color="error"
                variant="outline"
                @click="deleteItem(post.id)"
              />
            </div>
          </div>
          <!-- <div class="w-1/6 flex-row-center gap-4"></div> -->
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
    </UCard>
  </UContainer>
</template>
<script setup>
import { ref } from "vue";
import { useToast } from "#imports";

const loading = ref(false);
const toast = useToast();

definePageMeta({
  middleware: ["auth"],
});

const { $apiFetch } = useNuxtApp();
const user = ref([]);
const posts = ref([]);

onMounted(async () => {
  const response = await $apiFetch("/api/user");
  user.value = response;
  getPosts();
});

async function getPosts() {
  try {
    posts.value = await useNuxtApp().$apiFetch("api/user/posts");
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    toast.add({
      title: "Error",
      description: "Unable to load your posts.",
      color: "red",
      icon: "i-heroicons-x-circle",
    });
  }
}

// posts.value = await $apiFetch("api/user/posts");

async function deleteItem(id) {
  loading.value = true;

  try {
    const response = await useNuxtApp().$apiFetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    getPosts();

    toast.add({
      title: "Success",
      description: "Post Deleted successfully.",
      icon: "i-heroicons-check-circle",
      color: "success",
    });
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Failed to submit post. Please try again!",
      icon: "i-heroicons-x-circle",
      color: "red",
    });

    console.error("Submission failed:", error);
  } finally {
    loading.value = false;
  }
}
</script>
