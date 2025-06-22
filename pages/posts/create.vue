<template>
  <UContainer class="flex-center">
    <div class="w-full flex flex-row">
      <div class="w-2/4">
        <div class="sub-heading text-left">
          Compose Your <br />
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
  <UContainer>
    <PostEditor />
  </UContainer>
  <UContainer class="p-10">
    <div class="w-full mx-auto py-10 rounded-xl bg-gray-100">
      <UForm
        :schema="validation"
        class="space-y-3"
        :state="formInputs"
        @submit="submit"
      >
        <UFormField name="title" label="Blog Title" size="lg">
          <UInput class="w-full" v-model="formInputs.title" />
        </UFormField>
        <UFormField name="body" label="Blog Body" size="lg">
          <UTextarea class="w-full" v-model="formInputs.body" />
        </UFormField>
        <UFormField name="image" label="Image" size="lg">
          <UInput
            type="file"
            accept="image/*"
            class="w-full"
            @change="onFileChange"
          />
        </UFormField>
        <UButton class="mt-3" block label="Submit" type="submit" size="lg" />
      </UForm>
    </div>
  </UContainer>
</template>

<script setup>
import { z } from "zod";
import { reactive } from "vue";
import { validation } from "~/schemas/validation";

const router = useRouter();
const formInputs = reactive({
  title: "",
  body: "",
  image: null,
});

const schema = z.object({
  title: z.string().min(100, "Way too short"),
  body: z.string().min(50, "Too short"),
  image: z.any().nullable(),
});

function onFileChange(e) {
  formInputs.image = e.target.files[0];
}

async function submit(event) {
  const formData = new FormData();

  formData.append("title", formInputs.title);
  formData.append("body", formInputs.body);
  if (formInputs.image) {
    formData.append("feature_image", formInputs.image);
  }
  try {
    const response = await useNuxtApp().$apiFetch("/post", {
      method: "POST",
      body: formData,
    });

    console.log("Submitted:", response);

    resetForm();

    router.push("/blogs");
  } catch (error) {
    console.error("Submission failed:", error);
  }
}

function resetForm() {
  formInputs.title = "";
  formInputs.body = "";
  formInputs.image = null;
}
</script>

<style scoped></style>
