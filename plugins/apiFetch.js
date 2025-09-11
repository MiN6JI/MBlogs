import { defineNuxtPlugin } from "#app";
import Cookies from "js-cookie";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase,
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
    onRequest({ options }) {
      // Dynamically read the cookie on every request
      const token = Cookies.get("XSRF-TOKEN");
      if (token) {
        options.headers = {
          ...options.headers,
          "X-XSRF-TOKEN": token,
        };
      }
    },
  });

  nuxtApp.provide("apiFetch", apiFetch);
});
