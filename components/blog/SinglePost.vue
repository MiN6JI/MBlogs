<template>
  <UCard
    variant="soft"
    class="w-full rounded-2xl overflow-hidden md:h-[450px] sm:h-auto"
    :ui="{
      body: 'p-0 sm:p-0',
      footer: 'p-4 sm:p-6 bg-elevated h-[100%]',
    }"
  >
    <!-- Responsive Image -->
    <img
      :src="postImage"
      alt="post image"
      class="w-full h-48 sm:h-64 object-cover"
    />

    <template #footer>
      <div class="flex flex-col gap-3">
        <!-- Title -->
        <div class="text-lg sm:text-xl font-medium leading-snug line-clamp-2">
          <Nuxt-link :to="postLink" class="hover:underline">
            {{ postTitle }}
          </Nuxt-link>
        </div>

        <!-- Excerpt -->
        <p
          class="text-sm sm:text-base leading-5 text-muted-foreground line-clamp-3"
          v-html="postExcept"
        ></p>
      </div>
    </template>
  </UCard>
</template>

<script setup>
defineProps({
  postImage: String,
  postTitle: String,
  postLink: String,
  postExcept: String,
});
</script>
