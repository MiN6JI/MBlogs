<template>
  <div class="w-full px-8 pt-3 pb-2 border-b-1 border-muted">
    <nav class="w-full z-50">
      <div class="w-full flex flex-row justify-between h-14">
        <div class="flex-row-center gap-1">
          <ULink
            to="/"
            class="flex-row-center font-bold text-2xl gap-1 text-secondary"
          >
            <img src="/public/logo.png" alt="MBlogs" width="25" />
            <div class="leading-7 text-secondary">Blogs</div>
          </ULink>
        </div>
        <div class="flex-row-center">
          <ul
            class="hidden lg:flex flex-row justify-center items-center space-x-6 nav-link"
          >
            <li><nuxt-link class="hover:text-primary" to="/">Home</nuxt-link></li>
            <li><nuxt-link class="hover:text-primary" to="/blogs">Blogs</nuxt-link></li>
            <li>
              <nuxt-link class="hover:text-primary" to="/profile">Profile</nuxt-link>
            </li>
            <li class="flex gap-2">
              <UButton
                v-if="!isLoggedIn"
                size="lg"
                color="primary"
                class="rounded-full px-6"
                label="Sign In"
                to="/auth/login"
              />
              <UButton
                v-if="isLoggedIn"
                size="lg"
                color="secondary"
                class="rounded-full px-6"
                label="Sign Out"
                @click="logout"
              />
              <UButton
                v-if="!isLoggedIn"
                size="lg"
                color="secondary"
                class="rounded-full px-6"
                label="Sign Up"
                to="/auth/register"
              />
            </li>
            <li>
              <ClientOnly v-if="!colorMode?.forced">
                <UButton
                  class="rounded-full"
                  :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
                  color="neutral"
                  variant="ghost"
                  @click="isDark = !isDark"
                />

                <template #fallback>
                  <div class="size-8" />
                </template>
              </ClientOnly>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const { $apiFetch } = useNuxtApp();
const { removeUser, isLoggedIn } = useAuth();
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});

async function logout() {
  try {
    await useNuxtApp().$apiFetch("/logout", {
      method: "POST",
    });
  } catch (error) {
    console.error("Submission failed:", error);
  } finally {
    removeUser();
    window.location.pathname = "/";
  }
}
</script>

<style scoped>
.logo {
  width: 23px;
  height: 23px;
  object-fit: cover;
}
</style>
