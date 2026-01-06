<template>
  <div class="text-center m-5">
    <div>
      <h1 class="text-2xl">{{ greeterText }} its {{ time }}</h1>
      <p class="text-xl">on</p>
      <h3 class="text-2xl">{{ date }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const time = ref(""); // ref for current time
const date = ref(""); // ref for current date

let intervalId;

/**
 * Update the date and time refs
 */
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

// Set up interval to update time every second
onMounted(() => {
  timeAndGreeter();
  intervalId = setInterval(timeAndGreeter, 1000);
});

// Clear interval on component unmount
onBeforeUnmount(() => {
  clearInterval(intervalId);
});

let greeterText = ref(""); // ref for greeter text

function greeter() {
  let currentHour = new Date().getHours(); // get 24 hour time format for the greeter
  //greet the user based on time of day
  if (currentHour < 12) {
    greeterText.value = "Good Morning";
  } else if (currentHour < 16) {
    greeterText.value = "Good Afternoon";
  } else {
    greeterText.value = "Good Evening";
  }
}

//combine time and greeter functions
function timeAndGreeter() {
  updateDateTime();
  greeter();
}
</script>
