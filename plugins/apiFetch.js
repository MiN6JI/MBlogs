import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.provide('apiFetch', $fetch.create({baseURL: 'http://127.0.0.1:8000'}))
});