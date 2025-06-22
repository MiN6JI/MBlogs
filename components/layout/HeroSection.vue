<template>
  <UContainer class="flex-between py-8">
    <div class="w-1/2 flex flex-col justify-center">
      <div
        class="text-8xl font-medium tracking-tighter leading-[0.9em] text-jet pb-4"
      >
        <!-- Collecting Moments, Not Things —  -->
        One Journey at a Time
      </div>
      <div>
        <p class="normal-text">
          Dive into a diverse collection of experiences, reflections, and
          practical wisdom — designed to inspire thoughtful living and spark
          your own journey of discovery.
        </p>
      </div>
      <div class="pt-6">
        <UButton
          size="xl"
          class="rounded-full bg-[var(--color-mint)] hover:bg-[var(--color-shadow)] px-6"
          label="Get Started"
        />
      </div>
    </div>
    <div class="w-1/2 flex-center">
      <img src="public/Blog Figure 1.png" alt="Blog" class="blog-img" />
    </div>
  </UContainer>
</template>
<script setup></script>
<style scoped>
.blog-img {
  width: 500px;
}
</style>
