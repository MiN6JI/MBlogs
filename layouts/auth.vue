<template>
  <div class="p-8 h-screen w-screen">
    <div class="w-full flex flex-row h-full">
      <UApp>
        <slot />
        <UNotifications />
      </UApp>
    </div>
  </div>
</template>
