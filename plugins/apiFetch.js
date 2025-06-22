import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
   const apiFetch = $fetch.create({
      baseURL: 'http://localhost:8000/api',
   });

   nuxtApp.provide('apiFetch', apiFetch);
});