<template>
  <div class="w-full px-8 pt-3 pb-2 border-b-1 border-[#dee1e7]">
    <header class="w-full z-50">
      <div class="w-full flex flex-row justify-between h-14">
        <div class="flex-center gap-1">
          <ULink to="/" class="flex-center font-bold text-2xl gap-1 text-[var(--color-jet)]">
            <img src="/public/logo.png" alt="MBlogs" width="25" />
            <div class="leading-7">Blogs</div>
          </ULink>
        </div>
        <div class="flex-center">
          <ul class="flex flex-row justify-center items-center space-x-4">
            <li class="text-font"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="text-font"><nuxt-link to="/blogs">Blogs</nuxt-link></li>
            <li class="text-font">
              <nuxt-link to="/profile">Profile</nuxt-link>
            </li>
            <li class="text-font flex gap-2">
              <UButton
                v-if="!isLoggedIn"
                size="lg"
                class="rounded-full bg-[var(--color-mint)] hover:bg-[var(--color-shadow)] px-6"
                label="Sign Up"
                to="/auth/login"
              />
              <UButton
                v-if="isLoggedIn"
                size="lg"
                class="rounded-full bg-[var(--color-text)] hover:bg-[var(--color-shadow)] px-6"
                label="Logout"
                @click="logout"
              />
              <UButton
                v-if="!isLoggedIn"
                size="lg"
                class="rounded-full bg-[var(--color-text)] hover:bg-[var(--color-shadow)] px-6"
                label="Register"
                to="/auth/register"
              />
            </li>
          </ul>
        </div>
        <!-- <div class="flex-center">
          <UButton
            size="lg"
            class="rounded-full bg-[var(--color-mint)] hover:bg-[var(--color-shadow)] px-6"
            label="Sign Up"
            to="/auth/login"
          />
        </div> -->
      </div>
    </header>
  </div>
</template>

<script setup>
const { $apiFetch } = useNuxtApp();
const { removeUser, isLoggedIn } = useAuth();

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
