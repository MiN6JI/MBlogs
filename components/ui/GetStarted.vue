<template>
  <UContainer class="pb-20">
    <div class="w-full flex-row-center gap-10">
      <div class="w-2/3">
        <div class="w-full bg-muted rounded-3xl p-0 overflow-hidden">
          <img
          class="w-full h-[350px] object-cover"
            src="https://picsum.photos/1920/768?random=23"
            alt="Get Started Image"
          />
        </div>
      </div>
      <div class="w-1/3">
        <div
          class="w-full h-[350px] bg-primary rounded-3xl p-10 flex flex-col justify-between"
        >
          <div
            class="text-3xl font-bold text-secondary dark:text-[var(--color-eerie-800)]"
          >
            Don’t wait for perfection. Begin writing.
          </div>
          <div>
            <UButton
              size="lg"
              color="secondary"
              class="rounded-full px-6"
              label="Get Started"
              to="/auth/login"
            />
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
<style scoped></style>
