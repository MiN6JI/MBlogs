<template>
  <UContainer class="flex-center">
    <UCard variant="solid" class="bg-[var(--color-text)] py-3 w-[80%]">
      <div class="w-full flex flex-row">
        <div class="w-1/5 flex-center">
          <img
            src="https://picsum.photos/120/120.webp"
            alt="Profile Images"
            class="rounded-full"
          />
        </div>
        <div class="w-3/5 flex flex-col justify-center gap-3">
          <div class="text-4xl font-bold text-white">Shruti</div>
          <div class="text-white">deorukhkarshruti232@gmail.com</div>
        </div>
        <div class="w-1/5 flex-center">
          <UButton label="Create Post" size="xl" to="/posts/create"/>
        </div>
      </div>
    </UCard>
  </UContainer>
  <UContainer class="bg-gray-100">
    <div class="sub-heading text-center">Your Posts</div>
    <div class="flex-justify pt-10 gap-6">
      <div class="w-1/3"><SinglePost /></div>
      <div class="w-1/3"><SinglePost /></div>
      <div class="w-1/3"><SinglePost /></div>
    </div>
  </UContainer>
  <UContainer class="bg-gray-100">
    <div class="sub-heading text-center">Your Posts</div>
    <div
      class="bg-white text-center h-screen flex flex-col justify-center gap-4"
    >
      <div>You haven't created any articles yet.</div>
      <div>
        <UButton label="Create Post" to="/posts/create" />
      </div>
    </div>
  </UContainer>
</template>
<script setup></script>
