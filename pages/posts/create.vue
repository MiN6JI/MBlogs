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
    <div class="p-10 w-full flex flex-col items-center rounded-xl bg-gray-100">
      <UForm
        :state="state"
        :validate="validate"
        @submit="onSubmit"
        class="flex-col"
      >
        <UFormGroup label="Email" name="email">
          <UInput
            v-model="state.email"
            type="email"
            placeholder="Enter your email"
          />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput
            v-model="state.password"
            type="password"
            placeholder="Enter your password"
          />
        </UFormGroup>

        <UButton type="submit" label="Login" />
      </UForm>
    </div>
  </UContainer>
</template>

<script setup>
import { reactive } from "vue";
import { useToast } from "#imports"; // from @nuxt/ui

const state = reactive({
  email: "",
  password: "",
});

// Validation function
const validate = (state) => {
  const errors = [];
  if (!state.email)
    errors.push({ name: "email", message: "Email is required" });
  if (!state.password)
    errors.push({ name: "password", message: "Password is required" });
  return errors;
};

// Toast for feedback
const toast = useToast();

const onSubmit = async (event) => {
  toast.add({
    title: "Success",
    description: "Form submitted successfully.",
    color: "success",
  });
  console.log("Submitted data:", event.data);
};
</script>

<style scoped></style>
