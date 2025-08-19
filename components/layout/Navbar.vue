<template>
  <nav class="bg-white border-b shadow-sm px-8 py-5">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Left: Logo -->
      <NuxtLink to="/" class="text-xl font-bold text-gray-900">
        MySite
      </NuxtLink>

      <!-- Center: Nav Links (Desktop) -->
      <div class="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
        <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
        <NuxtLink to="/services" class="hover:text-primary">Services</NuxtLink>
        <NuxtLink to="/about" class="hover:text-primary">About</NuxtLink>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-3">
        <UButton size="sm" label="Login" />
        <UButton
          icon="i-heroicons-bars-3"
          class="lg:hidden"
          color="gray"
          size="sm"
          variant="ghost"
          @click="mobileOpen = !mobileOpen"
        />
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileOpen"
      class="lg:hidden mt-3 space-y-3 px-2 pb-4 text-sm font-medium text-gray-800"
    >
      <NuxtLink to="/" @click="mobileOpen = false" class="block">Home</NuxtLink>
      <NuxtLink to="/services" @click="mobileOpen = false" class="block"
        >Services</NuxtLink
      >
      <NuxtLink to="/about" @click="mobileOpen = false" class="block"
        >About</NuxtLink
      >
      <UButton label="Login" size="sm" block />
    </div>
  </nav>
</template>

<script setup>
const mobileOpen = ref(false);
</script>
