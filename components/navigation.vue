<template>
  <UContainer class="w-full pt-5 pb-4">
    <header class="w-full z-50">
      <div class="w-full flex flex-row justify-between h-14">
        <div class="flex-center gap-1">
          <img src="/public/logo.png" alt="MBlogs" width="25">
          <div class="font-bold text-2xl leading-7">
            Blogs
          </div>
        </div>
        <div class="w-1/3">
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Projects</li>
          </ul>
        </div>
        <div class="w-1/3">HI</div>
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
