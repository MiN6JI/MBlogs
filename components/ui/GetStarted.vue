<template>
  <UContainer class="pb-20">
    <div class="w-full flex flex-col lg:flex-row gap-6">
      <!-- Image Section -->
      <div class="w-full lg:w-2/3">
        <div
          class="w-full bg-muted rounded-lg md:rounded-2xl lg:rounded-3xl overflow-hidden"
        >
          <img
            class="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
            src="/Blogs/Blog 1.webp"
            alt="Get Started Image"
          />
        </div>
      </div>

      <!-- Text + Button Section -->
      <div class="w-full lg:w-1/3">
        <div
          class="w-full h-auto lg:h-[350px] bg-primary rounded-lg md:rounded-2xl lg:rounded-3xl p-6 md:p-10 flex flex-col justify-between gap-6"
        >
          <div
            class="text-2xl md:text-3xl font-bold text-secondary dark:text-[var(--color-eerie-800)]"
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
