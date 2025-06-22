<template>
  <UContainer class="py-18">
    <div class="flex flex-row w-[95%] gap-6">
      <div class="w-[50%]">
        <div class="sub-heading">Reflections from the path of progress</div>
      </div>
      <div class="w-[45%] pt-9 flex flex-row justify-end">
        <p class="normal-text">
          Every step forward begins with a spark of curiosity. This blog is your
          space to explore new ideas, deepen your skills, and reflect on the
          moments that shape both work and life. Let’s grow, one insight at a
          time.
        </p>
      </div>
      <div class="w-[5%] flex flex-col items-end pt-9">
        <UButton
          size="xl"
          icon="mi:arrow-right-up"
          class="rounded-full bg-[var(--color-mint)] hover:bg-[var(--color-shadow)]"
        />
      </div>
    </div>
    <div class="flex-justify pt-10 gap-6">
      <div class="w-1/3"><SinglePost /></div>
      <div class="w-1/3"><SinglePost /></div>
      <div class="w-1/3"><SinglePost /></div>
    </div>
  </UContainer>
</template>
<script setup></script>
