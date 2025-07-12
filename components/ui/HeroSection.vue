<template>
  <UContainer class="flex-between py-8">
    <div class="w-1/2 flex flex-col justify-center">
      <div
        class="text-8xl font-medium tracking-tighter leading-[0.9em] pb-4"
      >
        One Journey at a Time
      </div>
      <div>
        <p>
          Dive into a diverse collection of experiences, reflections, and
          practical wisdom — designed to inspire thoughtful living and spark
          your own journey of discovery.
        </p>
      </div>
      <div class="pt-6">
        <UButton
          size="xl"
          color="primary"
          class="rounded-full px-6"
          label="Get Started"
          to="/profile"
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
