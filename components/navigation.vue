<template>
  <header class="w-full z-50">
    <div
      class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    >
      <!-- Logo -->
      <div class="flex flex-row gap-1 justify-center">
        <img src="/public/logo.png" alt="Mblogs" class="logo" />
        <div class="text-xl italic font-bold text-[var(--color-text)]">
          Blogs
        </div>
      </div>

      <!-- Navigation -->
      <nav class="hidden md:flex space-x-8">
        <NuxtLink
          to="#home"
          class="text-[var(--color-text)] hover:text-[var(--color-mint)] transition"
          >Home</NuxtLink
        >
        <NuxtLink
          to="#about"
          class="text-[var(--color-text)] hover:text-[var(--color-mint)] transition"
          >About</NuxtLink
        >
        <NuxtLink
          to="#portfolio"
          class="text-[var(--color-text)] hover:text-[var(--color-mint)] transition"
          >Portfolio</NuxtLink
        >
        <NuxtLink
          to="#contact"
          class="text-[var(--color-text)] hover:text-[var(--color-mint)] transition"
          >Contact</NuxtLink
        >
      </nav>

      <!-- Mobile Menu Button -->
      <div>
        <UButton color="neutral" variant="soft">Sign In</UButton>
      </div>
    </div>
  </header>
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
