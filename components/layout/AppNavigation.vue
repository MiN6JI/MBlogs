<template>
  <div class="w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 border-b border-muted">
    <nav class="w-full z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center h-14">
        <!-- Logo -->
        <ULink
          to="/"
          class="flex items-center gap-2 font-bold text-2xl text-secondary"
        >
          <img
            src="/logo.png"
            alt="MBlogs Logo"
            width="25"
            height="25"
            class="object-cover"
          />
          <span>Blogs</span>
        </ULink>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-6 text-base font-medium">
          <li>
            <ULink class="hover:text-primary transition-colors" to="/"
              >Home</ULink
            >
          </li>
          <li>
            <ULink class="hover:text-primary transition-colors" to="/blogs"
              >Blogs</ULink
            >
          </li>
          <li>
            <ULink class="hover:text-primary transition-colors" to="/profile"
              >Profile</ULink
            >
          </li>
          <!-- <li class="flex gap-2">
            <UButton
              v-if="!isLoggedIn"
              size="sm"
              color="primary"
              class="rounded-full px-4"
              label="Sign In"
              to="/auth/login"
            />
            <UButton
              v-if="isLoggedIn"
              size="sm"
              color="secondary"
              class="rounded-full px-4"
              label="Sign Out"
              @click="logout"
            />
            <UButton
              v-if="!isLoggedIn"
              size="sm"
              color="secondary"
              class="rounded-full px-4"
              label="Sign Up"
              to="/auth/register"
            />
          </li> -->
        </ul>

        <!-- Right Side Buttons (Theme toggle + Mobile Menu) -->
        <div class="flex items-center gap-3">
          <ClientOnly v-if="!colorMode?.forced">
            <UButton
              class="rounded-full"
              :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
              color="neutral"
              variant="ghost"
              @click="isDark = !isDark"
            />
            <template #fallback><div class="size-8" /></template>
          </ClientOnly>

          <!-- Mobile Menu Button -->
          <UButton
            icon="i-heroicons-bars-3"
            class="md:hidden"
            color="secondary"
            size="md"
            variant="soft"
            @click="mobileOpen = !mobileOpen"
          />
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileOpen"
        class="md:hidden mt-3 space-y-3 px-2 pb-4 text-sm font-medium text-gray-800"
      >
        <UNavigationMenu
          color="neutral"
          orientation="vertical"
          variant="link"
          :items="items"
          class="w-full"
        />
      </div>
    </nav>
  </div>
</template>
<script setup>
const { $apiFetch } = useNuxtApp();
const { removeUser, isLoggedIn } = useAuth();
const colorMode = useColorMode();
const mobileOpen = ref(false);

const items = ref([
  [
    { label: "Home", icon: "i-lucide-book-open", to: "/" },
    { label: "Blogs", icon: "i-lucide-database", to: "/blogs" },
    { label: "Profile", icon: "i-lucide-box", to: "/profile" },
  ],
]);

const isDark = computed({
  get: () => colorMode.value === "dark",
  set: (val) => (colorMode.preference = val ? "dark" : "light"),
});

async function logout() {
  try {
    await $apiFetch("/logout", { method: "POST" });
  } catch (error) {
    console.error("Logout failed:", error);
  } finally {
    removeUser();
    window.location.pathname = "/";
  }
}
</script>
