<script setup>
import Weather from "./components/weather.vue";

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Nuxt Starter Template";
const description =
  "A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterCard: "summary_large_image",
});
</script>

<script>
const open = ref(true);
</script>

<template>
  <div
    class="select-none max-h-screen min-h-screen bg-center bg-cover"
    :style="{ backgroundImage: 'url(/miku-bg.jpeg)' }"
  >
    <UApp class="">
      <div class="max-h-screen min-h-screen flex w-full items-center h-full">
        <!--
        The Greeter and the clock components placed above each other
      -->

        <div class="flex flex-col gap-5 w-[50%] m-5">
          <div class="backdrop-blur-2xl shadow-2xl rounded-2xl p-5 ml-5">
            <Clock class="h-[50%]" />
          </div>
          <div
            class="h-[50%] backdrop-blur-2xl shadow-2xl rounded-2xl p-5 ml-5"
          >
            <Weather />
          </div>
        </div>

        <!--
        The callendar component inside a collapsible
      -->
        <div class="flex flex-col gap-2 w-[50%] m-5">
          <UCalendar
            disabled
            :navigation="false"
            :month-controls="false"
            :year-controls="false"
            class="rounded-2xl backdrop-blur-2xl p-5 pointer-events-none select-none shadow-2xl"
            color="secondary"
            size="xl"
          />
        </div>

        <!--
        <UCollapsible
          v-model:open="open"
          class=""
        >
          <UButton
            class="group"
            label="Calendar"
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-chevron-down"
            :ui="{
              trailingIcon:
                'group-data-[state=open]:rotate-180 transition-transform duration-200 h-[100%]',
            }"
            block
          />

          <template #content>
            
          </template>
        </UCollapsible>

        <-- todo use mistral 2b -->
      </div>
    </UApp>
  </div>
</template>
