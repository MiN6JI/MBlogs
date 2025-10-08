<template>
  <pre>{{ posts }}</pre>
  <UContainer class="flex-col-center gap-6">
    <!-- User Profile Card -->
    <UCard
      variant="solid"
      class="bg-muted dark:bg-accented p-5 rounded-3xl w-full"
    >
      <div class="w-full flex flex-col md:flex-row items-center gap-6">
        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <img
            src="/public/user.png"
            alt="Profile Image"
            class="w-20 h-20 sm:w-[100px] sm:h-[100px] object-cover rounded-full"
          />
        </div>

        <!-- User Info -->
        <div class="flex-1 flex flex-col items-center md:items-start gap-2">
          <div class="text-2xl sm:text-4xl font-bold text-muted">
            {{ user.name }}
          </div>
          <div class="text-muted text-center md:text-left">
            {{ user.email }}
          </div>
        </div>

        <!-- Button -->
        <div>
          <UButton
            class="rounded-full px-6 w-full md:w-auto"
            color="primary"
            label="Create Post"
            size="lg"
            to="/posts/create"
          />
        </div>
      </div>
    </UCard>

    <!-- Posts Section -->
    <UCard variant="ghost" class="w-full">
      <div
        class="text-secondary text-3xl sm:text-5xl font-medium text-center py-10"
      >
        Your Posts
      </div>

      <!-- Posts List -->
      <div class="flex flex-col gap-5" v-if="posts.length != 0">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="flex flex-col md:flex-row w-full gap-6 bg-muted rounded-xl overflow-hidden"
        >
          <!-- Post Image -->
          <div class="w-full md:w-2/6">
            <img
              :src="post.feature_image"
              class="w-full h-48 md:h-full object-cover"
              alt="Post Image"
            />
          </div>

          <!-- Post Content -->
          <div class="w-full md:w-4/6 flex flex-col justify-center gap-4 p-4">
            <div class="text-secondary text-xl sm:text-2xl font-medium">
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
                class="p-2 rounded-md"
                size="sm"
                color="primary"
                variant="soft"
                :to="`/posts/${post.id}`"
              />
              <UButton
                icon="mdi:pencil"
                class="p-2 rounded-md"
                size="sm"
                color="secondary"
                variant="soft"
                :to="`/posts/${post.id}/edit`"
              />
              <UButton
                icon="material-symbols:delete-outline"
                class="p-2 rounded-md"
                size="sm"
                color="error"
                variant="soft"
                @click="deleteItem(post.id)"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-else
        class="bg-muted rounded-2xl text-center h-64 flex flex-col justify-center gap-4"
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
const { $axios } = useNuxtApp();

const loading = ref(false);
const toast = useToast();

definePageMeta({
  middleware: ["auth"],
});

const { $apiFetch } = useNuxtApp();
const user = ref([]);
const posts = ref([]);

onMounted(async () => {
  const response = await $axios.get("/api/user");

  user.value = response.data;
  getPosts();
});

async function getPosts() {
  try {
    const response = await $axios.get("api/user/posts");

    posts.value = response.data;
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
    const response = await $axios.delete(`/api/post/${id}`, {
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
