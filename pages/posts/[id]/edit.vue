<template>
  <UContainer class="flex-center px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col gap-4 text-center">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug"
      >
        Edit Your Post
      </h2>

      <p
        class="max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-base sm:text-lg text-muted"
      >
        Update your blog post and make it even better. Edit the title, refine
        your content, or upload a new image to give it a fresh look.
      </p>
    </div>
  </UContainer>

  <UContainer class="px-4 sm:px-6 lg:px-8 py-6">
    <div class="w-full mx-auto py-8 sm:py-10 rounded-xl bg-muted">
      <UForm
        :schema="validation"
        class="mx-auto w-full sm:w-[90%] lg:w-[70%] space-y-4"
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

        <UFormField name="image" label="Change Image" size="lg">
          <UInput
            color="secondary"
            variant="outline"
            highlight
            type="file"
            accept="image/*"
            class="w-full"
            @change="onFileChange"
            :ui="{ base: 'text-muted dark:bg-muted' }"
          />
        </UFormField>

        <!-- Current image preview -->
        <div class="py-3 flex justify-center sm:justify-start">
          <img
            :src="formInputs.feature_image || 'Image not Found'"
            alt="Current blog image"
            class="rounded-md w-[120px] sm:w-[160px] h-[90px] sm:h-[110px] object-cover shadow"
          />
        </div>

        <UButton
          class="mt-3"
          block
          label="Update Post"
          size="lg"
          :loading="loading"
          loading-icon="svg-spinners:dot-revolve"
        />
      </UForm>
    </div>
  </UContainer>
</template>

<script setup>
import { z } from "zod";
import { reactive, onMounted } from "vue";
import { validation } from "~/schemas/validation";
import { useToast } from "#imports";
import { resolveTypeElements } from "vue/compiler-sfc";
const { $axios } = useNuxtApp();

definePageMeta({
  middleware: ["auth"],
});

const router = useRouter();
const route = useRoute();
const { $apiFetch } = useNuxtApp();
const formInputs = reactive({
  title: "",
  body: "",
  image: null,
});

const loading = ref(false);
const toast = useToast();
const post = ref(null);

onMounted(() => {
  getFormData();
});

function onFileChange(e) {
  formInputs.image = e.target.files[0];
}

async function getFormData() {
  try {
    const response = await $axios.get(`api/posts-auth/${route.params.id}`);
    post.value = response.data;
    formInputs.id = post.value.id;
    formInputs.title = post.value.title;
    formInputs.body = post.value.body;
    formInputs.feature_image = post.value.feature_image;
  } catch (e) {
    router.push("/");
    toast.add({ title: "Unauthorized Action", color: "error" });
  }
}

async function submit(event) {
  console.log("Click");
  loading.value = true;

  const formData = new FormData();
  formData.append("title", formInputs.title);
  formData.append("body", formInputs.body);
  if (formInputs.image) formData.append("feature_image", formInputs.image);

  try {
    const response = await $axios.patch(
      `/api/post/${route.params.id}`,
      formData
    );

    toast.add({
      title: "Success",
      description: "Post updated successfully.",
      icon: "i-heroicons-check-circle",
      color: "success",
    });

    resetForm();
    router.push("/profile");
    console.log("Submitted:", response.data);
  } catch (error) {
    if (error.response?.status === 403) {
      toast.add({
        title: "Error",
        description: "Unauthorized Action",
        icon: "i-heroicons-x-circle",
        color: "error",
      });
      return;
    }

    toast.add({
      title: "Error",
      description: "Failed to submit post. Please try again!",
      icon: "i-heroicons-x-circle",
      color: "error",
    });

    console.error("Submission failed:", error.response?.data || error);
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
