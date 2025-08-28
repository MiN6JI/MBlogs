<template>
  <UContainer class="flex-center px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col gap-4 text-center">
      <!-- Responsive, Bold, Bigger Heading -->
      <h2
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug"
      >
        Share Your Thoughts
      </h2>

      <!-- Responsive Subtext -->
      <p
        class="max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-muted"
      >
        Write your blog post and let your voice be heard. Add a title, craft
        your content, and upload an image to make your post stand out.
      </p>
    </div>
  </UContainer>

  <!-- Form Container -->
  <UContainer class="p-6 sm:p-10">
    <div class="w-full mx-auto py-8 sm:py-10 rounded-xl bg-muted shadow-md">
      <UForm
        :schema="validation"
        class="mx-auto w-[95%] sm:w-[80%] space-y-4"
        :state="formInputs"
        @submit.prevent="submit"
      >
        <UFormField name="title" label="Blog Title" size="lg">
          <UInput
            color="secondary"
            variant="outline"
            highlight
            class="w-full"
            v-model="formInputs.title"
            :ui="{ base: 'text-muted dark:bg-muted' }"
          />
        </UFormField>

        <UFormField name="body" label="Blog Body" size="lg">
          <PostEditor v-model="formInputs.body" />
        </UFormField>

        <UFormField name="image" label="Image" size="lg">
          <UInput
            color="neutral"
            variant="outline"
            highlight
            type="file"
            accept="image/*"
            class="w-full"
            @change="onFileChange"
            :ui="{ base: 'text-muted dark:bg-muted' }"
          />
        </UFormField>

        <UFormField name="Tag" label="Blog Related To" size="lg">
          <UInput
            color="neutral"
            variant="outline"
            highlight
            type="text"
            class="w-full"
            v-model="formInputs.tag"
            :ui="{ base: 'text-muted dark:bg-muted' }"
          />
        </UFormField>

        <UButton
          class="mt-3"
          block
          label="Submit"
          @click="submit"
          size="lg"
          :loading="loading"
          loading-icon="svg-spinners:dot-revolve"
        />
      </UForm>
    </div>
  </UContainer>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

import { z } from "zod";
import { reactive } from "vue";
import { validation } from "~/schemas/validation";
import { useToast } from "#imports";

const router = useRouter();
const formInputs = reactive({
  title: "",
  body: "",
  image: null,
  tag: "",
});

const loading = ref(false);
const toast = useToast();

function onFileChange(e) {
  formInputs.image = e.target.files[0];
}

async function submit(event) {
  console.log("Click");
  loading.value = true;
  const formData = new FormData();

  formData.append("title", formInputs.title);
  formData.append("body", formInputs.body);
  formData.append("tag", formInputs.tag);
  if (formInputs.image) {
    formData.append("feature_image", formInputs.image);
  }
  try {
    const response = await useNuxtApp().$apiFetch("/api/post", {
      method: "POST",
      body: formData,
    });

    toast.add({
      title: "Success",
      description: "Post created successfully.",
      icon: "i-heroicons-check-circle",
      color: "success",
    });

    resetForm();
    router.push("/blogs");
    console.log("Submitted:", response);
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Failed to submit post. Please try again!",
      icon: "i-heroicons-x-circle",
      color: "red",
    });

    console.error("Submission failed:", error);
  } finally {
    loading.value = false;
  }
}

function resetForm() {
  formInputs.title = "";
  formInputs.body = "";
  formInputs.image = null;
}
</script>

<style scoped></style>
