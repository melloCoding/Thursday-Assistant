<script setup lang="ts">
import Calendar from "~/components/calendar.vue";
</script>

<template>
  <home-navbar class="" />
  <div class="max-h-screen min-h-screen flex w-full items-center h-full">
    <!--
       The Greeter and the clock components placed above each other
      -->

    <div class="flex flex-col gap-5 w-[50%] m-5">
      <div class="backdrop-blur-2xl shadow-2xl rounded-2xl p-5 ml-5">
        <Clock class="h-[50%]" />
      </div>
      <div class="h-[50%] backdrop-blur-2xl shadow-2xl rounded-2xl p-5 ml-5">
        <Weather />
      </div>
    </div>

    <!--Calendar-->
    <div class="flex flex-col gap-2 w-[50%] m-5"><Calendar /></div>
  </div>
</template>
