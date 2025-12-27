<script setup>
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
  <div class="select-none">
    <UApp class="">
      <div class="flex w-[100%] items-center mt-5 h-[100%]">
        <!--
        The Greeter and the clock components placed above each other
      -->
        <div class="w-[50%] bg-blue-900 rounded-2xl p-5 ml-5">
          <Greeter />

          <Clock class="h-[100%]" />
        </div>

        <!--
        The callendar component inside a collapsible
      -->
        <div class="flex flex-col gap-2 w-[50%] m-5">
          <UCalendar
            disabled
            :month-controls="false"
            :year-controls="false"
            class="bg-slate-800 rounded-2xl p-5"
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
