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
  <UContainer class="p-10">
    <div class="w-full mx-auto py-10 rounded-xl bg-gray-100">
      <UForm
        :schema="schema"
        class="space-y-3"
        :state="formInputs"
        @submit="submit"
      >
        <UFormField name="blogTitle" label="Blog Title" size="lg">
          <UInput class="w-full" v-model="formInputs.title" />
        </UFormField>
        <UFormField name="blogBody" label="Blog Body" size="lg">
          <UTextarea class="w-full" v-model="formInputs.body" />
        </UFormField>
        <UFormField name="blogImg" label="Image" size="lg">
          <UInput
            type="file"
            accept="image/*"
            class="w-full"
            v-model="formInputs.image"
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

const formInputs = reactive({
  title: "",
  body: "",
  image: null,
});

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
  image: z.any().nullable(),
});

function submit(event) {
  console.log(event);
}
</script>

<style scoped></style>
