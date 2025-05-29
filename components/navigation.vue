<template>
  <UContainer class="w-full pt-3 pb-2 border-b-1 border-[#dee1e7]">
    <header class="w-full z-50">
      <div class="w-full flex flex-row justify-between h-14">
        <div class="flex-center gap-1">
          <img src="/public/logo.png" alt="MBlogs" width="25" />
          <div class="font-bold text-2xl leading-7">Blogs</div>
        </div>
        <div class="flex-center">
          <ul class="flex flex-row justify-center items-center gap-4">
            <li class="text-font">Home</li>
            <li class="text-font"><nuxt-link to="/blog">Blog</nuxt-link></li>
            <li class="text-font">Projects</li>
            <li class="text-font">Contact</li>
            <li class="text-font">Shop</li>
          </ul>
        </div>
        <div class="flex-center">
          <UButton
            size="lg"
            class="rounded-full bg-[var(--color-mint)] hover:bg-[var(--color-shadow)] px-6"
            label="Sign Up"
          />
        </div>
      </div>
    </header>
  </UContainer>
</template>

<script setup>
// No specific logic yet, could add mobile menu toggle later
</script>

<style scoped>
.logo {
  width: 23px;
  height: 23px;
  object-fit: cover;
}
</style>
