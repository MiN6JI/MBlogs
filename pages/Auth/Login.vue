<template>
  <div class="w-[50%] bg-[#CFFAEA] flex-center rounded-xl">
    <img src="/public/Blog Figure 4.png" alt="Auth Image" width="500" />
  </div>
  <div class="w-[50%] flex-center text-center">
    <div class="flex flex-col justify-center p-[50px] gap-2">
      <div class="text-5xl font-bold text-jet">Welcome Back</div>
      <div>
        <p class="normal-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit Autem.
        </p>
      </div>
      <div class="flex flex-col gap-4 py-6">
        <UInput
          class="w-full"
          v-model="email"
          type="email"
          placeholder="Email"
          size="xl"
          :ui="{ base: 'w-full rounded-3xl py-3 px-6' }"
        />
        <UInput
          v-model="password"
          placeholder="Password"
          :type="show ? 'text' : 'password'"
          :ui="{ trailing: 'pe-1', base: 'w-full rounded-3xl py-3 px-6' }"
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
        <UButton
          size="xl"
          class="mt-4 text-center bg-[var(--color-jet)]"
          type="submit"
          label="Submit"
          to="/auth/register"
          :ui="{ base: 'w-full rounded-3xl py-3 px-6' }"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "auth",
});

const email = ref("");
const show = ref(false);
const password = ref("");
</script>
