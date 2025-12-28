<template>
  <div>
    <!-- show temperature if available -->
    <h2 class="text-xl">Tempurature:</h2>
    <h1 class="text-2xl">{{ weather?.current?.temp_f ?? "Loading..." }}°F</h1>
    <h2 class="text-xl">Humidity:</h2>
    <h1 class="text-2xl">{{ weather?.current?.humidity ?? "Loading..." }}%</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

let intervalId: ReturnType<typeof setInterval> | null = null;
let weather = ref<any>(null);

onMounted(() => {
  getWeather();
  intervalId = setInterval(getWeather, 3600000); // Update every hour
});

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

const weatherUrl = "http://api.weatherapi.com/v1/current.json?";
const apiKey = "Replace with api key from weatherapi.com";
const zipcode = "33071";
const url = `${weatherUrl}key=${apiKey}&q=${zipcode}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    weather.value = data;
    console.log("weather data:", data);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}
</script>

<style></style>
