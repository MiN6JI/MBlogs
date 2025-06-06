<template>
  <div class="w-full px-8 pt-3 pb-2 border-b-1 border-[#dee1e7]">
    <header class="w-full z-50">
      <div class="w-full flex flex-row justify-between h-14">
        <div class="flex-center gap-1">
          <img src="/public/logo.png" alt="MBlogs" width="25" />
          <div class="font-bold text-2xl leading-7">Blogs</div>
        </div>
        <div class="flex-center">
          <ul class="flex flex-row justify-center items-center space-x-4">
            <li class="text-font"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="text-font"><nuxt-link to="/blogs">Blogs</nuxt-link></li>
            <li class="text-font">
              <nuxt-link to="/profile">Profile</nuxt-link>
            </li>
            <li class="text-font">
              <UButton
                size="lg"
                class="rounded-full bg-[var(--color-mint)] hover:bg-[var(--color-shadow)] px-6"
                label="Sign Up"
                to="auth/login"
              />
            </li>
          </ul>
        </div>
        <!-- <div class="flex-center">
          <UButton
            size="lg"
            class="rounded-full bg-[var(--color-mint)] hover:bg-[var(--color-shadow)] px-6"
            label="Sign Up"
            to="auth/login"
          />
        </div> -->
      </div>
    </header>
  </div>
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
