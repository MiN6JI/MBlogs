<template>
  <UContainer
    class="bg-gray-100 py-20 w-full h-[200px] flex flex-col justify-center items-center gap-5 text-center"
  >
    <div class="text-4xl font-semibold capitalize">{{ route.name }}</div>
    <UBreadcrumb :items="items" class="normal-text" />
  </UContainer>
  <UContainer>
    <div class="flex-justify px-30 py-10 flex-wrap">
      <div v-for="post in 10" :key="index" class="w-1/3"><SinglePost /></div>
    </div>
  </UContainer>
</template>
<script setup>
const route = useRoute();

const items = [
  { label: "Home", icon: "i-lucide-house", to: "/" },
  { label: "Blogs", icon: "i-lucide-box", to: "/blogs" },
];
</script>
