<template>
  <div class="w-[50%] flex-row-center rounded-xl">
    <img
      src="https://picsum.photos/2000/2000.webp"
      class="w-full h-full object-cover rounded-3xl"
      alt="Auth Image"
    />
  </div>
  <div class="w-[50%] flex-row-center text-center">
    <div class="flex flex-col justify-center p-[50px] gap-2">
      <div class="text-5xl font-bold text-jet">Welcome Back</div>
      <div>
        <p class="normal-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit Autem.
        </p>
      </div>
      <UForm :state="formInputs" @submit.prevent="submit">
        <div class="flex flex-col gap-4 py-6">
          <UInput
            color="secondary"
            variant="outline"
            highlight
            class="w-full text-secondary"
            v-model="formInputs.email"
            type="email"
            placeholder="Email"
            size="xl"
            :ui="{ base: 'w-full rounded-3xl py-3 px-6 text-muted' }"
          />
          <UInput
            color="secondary"
            variant="outline"
            highlight
            v-model="formInputs.password"
            placeholder="Password"
            :type="show ? 'text' : 'password'"
            :ui="{
              trailing: 'pe-1',
              base: 'w-full rounded-3xl py-3 px-6 text-muted',
            }"
            size="xl"
          >
            <template #trailing>
              <UButton
                color="secondary"
                variant="link"
                size="md"
                :icon="show ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                :aria-pressed="show"
                aria-controls="password"
                :ui="{ base: 'pr-6' }"
                @click="show = !show"
              />
            </template>
          </UInput>
          <UButton
            size="xl"
            color="primary"
            class="mt-4 text-center text-secondary"
            type="submit"
            label="Submit"
            :ui="{ base: 'w-full rounded-3xl py-3 px-6' }"
            :loading="loading"
            loading-icon="svg-spinners:dot-revolve"
          />
        </div>
      </UForm>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "auth",
  middleware: ["user"],
});

import { useToast } from "#imports";
import { validation } from "~/schemas/validation";

const { $apiFetch } = useNuxtApp();

const toast = useToast();
const loading = ref(false);

const formInputs = reactive({
  email: "",
  password: null,
});

const show = ref(false);

async function csrf() {
  return $apiFetch(`sanctum/csrf-cookie`, {
    credentials: "include",
  });
}

async function submit() {
  loading.value = true;
  await csrf();

  const formData = new FormData();
  formData.append("email", formInputs.email);
  formData.append("password", formInputs.password);

  const paylaod = {
    email: formInputs.email,
    password: formInputs.password,
  };
  try {
    const response = await useNuxtApp().$apiFetch("/login", {
      method: "POST",
      body: paylaod,
    });

    toast.add({
      title: "Success",
      description: "User Logged in successfully.",
      icon: "i-heroicons-check-circle",
      color: "primary",
    });

    const user = await $apiFetch("api/user");

    const { setUser } = useAuth();
    setUser(user);

    await navigateTo("/profile");
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Failed to Submit, please try again later!",
      icon: "i-heroicons-x-circle",
      color: "error",
    });

    console.error("Submission failed:", error);
  } finally {
    loading.value = false;
  }
}
</script>
