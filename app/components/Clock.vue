<template>
  <div class="text-center m-5">
    <div>
      <h1 class="text-2xl">{{ time }}</h1>
      <h3 class="text-xl">{{ date }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const time = ref("");
const date = ref("");

let intervalId;

const updateDateTime = () => {
  const now = new Date();

  time.value = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  date.value = now.toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

onMounted(() => {
  updateDateTime();
  intervalId = setInterval(updateDateTime, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>
