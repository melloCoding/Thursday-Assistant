<template>
  <div class="text-center m-5">
    <div>
      <h1 class="text-2xl">{{ timeOfDay }} its {{ time }}</h1>
      <p class="text-xl">on</p>
      <h3 class="text-2xl">{{ date }}</h3>
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
  timeAndGreeter();
  intervalId = setInterval(timeAndGreeter, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

let currentHour = new Date().getHours();
let timeOfDay = ref("");

function greeter() {
  if (currentHour <= 12) {
    timeOfDay.value = "Good Morning";
  } else if (currentHour > 12 && currentHour < 16) {
    timeOfDay.value = "Good Afternoon";
  } else {
    timeOfDay.value = "Good Evening";
  }
  console.log(currentHour);
}

function timeAndGreeter() {
  updateDateTime();
  greeter();
}
</script>
