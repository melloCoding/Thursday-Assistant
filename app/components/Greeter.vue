<template>
  <div>
    <h1 class="text-2xl">{{ timeOfDay }} it is,</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let currentHour = new Date().getHours();
let timeOfDay = ref("");

if (currentHour <= 12) {
  timeOfDay.value = "Good Morning";
} else if (currentHour > 12 && currentHour >= 16) {
  timeOfDay.value = "Good Afternoon";
} else {
  timeOfDay.value = "Good Evening";
}
</script>

<style></style>
