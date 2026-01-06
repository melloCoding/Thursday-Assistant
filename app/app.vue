<script setup>
import Weather from "./components/weather.vue";

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Thursday Assistant";
const description =
  "A personal assistant dashboard built with Nuxt 3 and Tauri.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});

/*TODO:
  Use tauri-plugin-store to save a custom background image path and load it
*/
</script>

<template>
  <div
    class="select-none max-h-screen min-h-screen bg-center bg-cover"
    :style="{ backgroundImage: 'url(/miku-bg.jpeg)' }"
  >
    <UApp class="">
      <NuxtPage />
    </UApp>
  </div>
</template>
