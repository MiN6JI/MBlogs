<template>
  <UContainer
    class="bg-gray-100 py-20 w-full h-[200px] flex flex-col justify-center items-center gap-5 text-center"
  >
    <UCard class="bg-[var(--color-mint)]">hi </UCard>
    <UBreadcrumb :items="items" class="normal-text" />
  </UContainer>
</template>
<script setup>
const route = useRoute();

const items = [
  { label: "Home", icon: "i-lucide-house", to: "/" },
  { label: "Profile", icon: "i-lucide-box", to: "/profile" },
];
</script>
