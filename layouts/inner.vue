<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen pbg-gray-100">
    <!-- Layout-level component -->
    <Navigation />

    <!-- Where the page content renders -->
    <slot />

    <!-- Footer Components -->
    <Footer />
  </div>
</template>

<script setup>
// Nuxt auto-imports components from /components
</script>
