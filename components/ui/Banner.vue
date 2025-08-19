<template>
  <UContainer
    class="h-[80vh] flex flex-col items-center justify-center text-center px-4"
  >
    <div class="flex flex-col justify-center items-center">
      <div
        class="hero-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
      >
        More Than Words It’s You.
      </div>
      <p
        class="normal-text text-muted max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-center pb-10 mt-4"
      >
        Every step forward begins with a spark of curiosity. This blog is your
        space to explore new ideas, deepen your skills, and reflect on the
        moments that shape both work and life. Let’s grow, one insight at a
        time.
      </p>
    </div>

    <!-- Buttons -->
    <div class="flex flex-row items-center justify-center gap-4">
      <UButton
        variant="solid"
        size="xl"
        color="primary"
        class="rounded-full px-6 w-full sm:w-auto text-accented dark:text-[var(--color-eerie-800)]"
        label="Get Started"
      />
      <UButton
        variant="solid"
        size="xl"
        color="secondary"
        class="rounded-full px-6 w-full sm:w-auto"
        label="Know More"
      />
    </div>
  </UContainer>
</template>

<script setup></script>
