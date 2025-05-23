<template>
  <UContainer class="flex-between">
    <div class="w-1/2 flex flex-col justify-center">
      <div class="text-3xl font-bold">Heading</div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          illum?
        </p>
      </div>
      <UButton color="neutral" label="Create Blog" />
    </div>
    <div class="w-1/2 flex-center bg-[#ECFBF5] rounded-md">
      <img src="public/Blog Figure 1.png" alt="Blog" class="blog-img" />
    </div>
  </UContainer>
</template>
<script setup></script>
<style scoped>
.blog-img {
  width: 400px;
}
</style>
