import { defineNuxtPlugin } from "#app";
import Cookies from "js-cookie";

export default defineNuxtPlugin(nuxtApp => {
   const config = useRuntimeConfig()

   const apiFetch = $fetch.create({
      baseURL: config.public.apiBase,
      credentials: 'include',
      withCredentials: true,
      headers: {
         Accept: 'application/json',
         'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      }
   });

   nuxtApp.provide('apiFetch', apiFetch);
});