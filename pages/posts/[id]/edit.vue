<template>
  <UContainer class="flex-center">
    <div class="w-full flex flex-row">
      <div class="w-2/4">
        <div class="sub-heading text-left">
          Update Your <br />
          Post
        </div>
      </div>

      <div class="w-3/4 flex-center">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          voluptatibus recusandae, eum dolor cum qui perspiciatis voluptas ut
          autem earum corrupti obcaecati officia consequuntur. Maiores earum
          voluptates eveniet consectetur nesciunt.
        </div>
      </div>
    </div>
  </UContainer>
  <UContainer class="p-10">
    <div class="w-full mx-auto py-10 rounded-xl bg-muted">
      <UForm
        :schema="validation"
        class="mx-auto w-[80%] space-y-3"
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
            :ui="{ base: 'text-muted dark:text-white dark:bg-muted' }"
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
            :ui="{ base: 'text-muted dark:text-white dark:bg-muted' }"
          />
        </UFormField>
        <!-- <UFormField name="feature-image" label="Current Image" size="lg"> -->
        <div class="py-2">
          <img
            :src="formInputs.feature_image"
            alt="blog posts"
            class="rounded-sm w-[150px] h-[100px] object-cover"
          />
        </div>
        <!-- </UFormField> -->
        <UButton
          class="mt-3"
          block
          label="Submit"
          @click.prevent="submit"
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
    post.value = await $apiFetch(`api/posts-auth/${route.params.id}`);
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
  if (formInputs.image) {
    formData.append("feature_image", formInputs.image);
  }

  formData.append("_method", "PATCH");

  try {
    const response = await useNuxtApp().$apiFetch(
      `/api/post/${route.params.id}`,
      {
        method: "POST",
        body: formData,
      }
    );

    toast.add({
      title: "Success",
      description: "Post created successfully.",
      icon: "i-heroicons-check-circle",
      color: "success",
    });

    resetForm();
    router.push("/profile");
    console.log("Submitted:", response);
  } catch (error) {
    if (error.response.status === 403) {
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
