<template>
  <UContainer class="p-10">
    <div class="p-10 w-full flex flex-col items-center rounded-xl bg-gray-100">
      <div class="w-[60%]">
        <div>
          <div class="w-full flex flex-row py-6">
            <div class="w-1/2">
              <div class="text-gray normal-text">
                {{ format(new Date(post.created_at), "MMMM dd, yyyy") }}
              </div>
            </div>
            <div class="w-1/2 flex justify-end">
              <div
                class="inline text-xs font-medium py-1 px-4 rounded-2xl bg-[var(--color-mint)]"
              >
                Blog Tags
              </div>
            </div>
          </div>

          <div>
            <img
              :src="post.feature_image"
              alt="blog posts"
              class="rounded-xl"
            />
          </div>
          <div class="py-2 prose">
            <h1>
              {{ post.title }}
            </h1>
          </div>
        </div>
        <div class="prose" v-html="post.body"></div>
      </div>
    </div>
  </UContainer>
  <UContainer>
    <div class="sub-heading text-center">Your Posts</div>
    <div class="flex-justify pt-10 gap-6">
      <div class="w-1/3"><SinglePost /></div>
      <div class="w-1/3"><SinglePost /></div>
      <div class="w-1/3"><SinglePost /></div>
    </div>
  </UContainer>
</template>
<script setup>
import { format } from "date-fns";

const route = useRoute();
const { $apiFetch } = useNuxtApp();

const post = await $apiFetch(`api/posts/${route.params.id}`);
</script>
