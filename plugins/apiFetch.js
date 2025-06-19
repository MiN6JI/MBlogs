import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
   const apiFetch = $fetch.create({
      baseURL: 'http://127.0.0.1:8000/api',
   });

   nuxtApp.provide('apiFetch', apiFetch);
});