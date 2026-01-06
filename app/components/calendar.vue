<template>
  <div>
    <UCalendar
      disabled
      :navigation="false"
      :month-controls="false"
      :year-controls="false"
      :key="calendarReloadKey"
      class="rounded-2xl backdrop-blur-2xl p-5 pointer-events-none select-none shadow-2xl"
      color="secondary"
      size="xl"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onMounted, onBeforeUnmount } from "vue";
let intervalId: ReturnType<typeof setInterval> | undefined;

const calendarReloadKey = ref(0);

// Set up interval to update time every second
onMounted(() => {
  reloadComponent();
  intervalId = setInterval(reloadComponent, 10);
});

// Clear interval on component unmount
onBeforeUnmount(() => {
  clearInterval(intervalId);
});

function reloadComponent() {
  calendarReloadKey.value += 1; // Change the key to force re-render
  if (calendarReloadKey.value > 10) {
    calendarReloadKey.value = 0; // Reset to avoid large numbers
  }
}
</script>

<style></style>
