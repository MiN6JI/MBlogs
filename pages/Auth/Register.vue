<template>
  <div class="w-[50%] flex-center text-center">
    <div class="w-full flex flex-col justify-center p-[50px] gap-2">
      <div class="text-5xl font-bold text-jet">Registration</div>
      <div>
        <p class="normal-text">
          Please fill in your details to create an account.
        </p>
      </div>
      <UForm :state="formInputs" @submit.prevent="submit">
        <div class="flex flex-col gap-4 py-6">
          <UInput
            color="secondary"
            variant="outline"
            highlight
            class="w-full"
            v-model="formInputs.name"
            type="text"
            placeholder="Name"
            size="xl"
            :ui="{ base: 'w-full rounded-3xl py-3 px-6 text-muted' }"
          />

          <UInput
            color="secondary"
            variant="outline"
            highlight
            class="w-full"
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
                color="neutral"
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

          <UInput
            color="secondary"
            variant="outline"
            highlight
            v-model="formInputs.password_confirmation"
            placeholder="Confirm Password"
            :type="confirmShow ? 'text' : 'password'"
            :ui="{
              trailing: 'pe-1',
              base: 'w-full rounded-3xl py-3 px-6 text-muted',
            }"
            size="xl"
          >
            <template #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="md"
                :icon="confirmShow ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                :aria-pressed="confirmShow"
                aria-controls="confirm-password"
                :ui="{ base: 'pr-6' }"
                @click="confirmShow = !confirmShow"
              />
            </template>
          </UInput>

          <UButton
            size="xl"
            color="primary"
            class="mt-4 text-center text-secondary"
            type="submit"
            label="Submit"
            @click="submit"
            :ui="{ base: 'w-full rounded-3xl py-3 px-6' }"
            :loading="loading"
            loading-icon="svg-spinners:dot-revolve"
          />
        </div>
      </UForm>
    </div>
  </div>
  <div class="w-[50%] flex-center rounded-xl">
    <img
      src="https://picsum.photos/2000/2000.webp"
      class="w-full h-full object-cover rounded-3xl"
      alt="Registration Image"
    />
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

const show = ref(false);
const confirmShow = ref(false);

const formInputs = reactive({
  name: "",
  email: "",
  password: null,
  password_confirmation: null,
});

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

  const payload = {
    name: formInputs.name,
    email: formInputs.email,
    password: formInputs.password,
    password_confirmation: formInputs.password_confirmation,
  };
  try {
    await useNuxtApp().$apiFetch("/register", {
      method: "POST",
      body: payload,
    });

    toast.add({
      title: "Success",
      description: "Registration is successfull.",
      icon: "i-heroicons-check-circle",
      color: "primary",
    });

    const user = await $apiFetch("api/user");

    const { setUser } = useAuth();
    setUser(user.name);

    window.location.pathname = "/profile";
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
