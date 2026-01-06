<template>
  <div>
    <settings-navbar class="" />
    <div class="max-h-screen min-h-screen flex w-full items-center h-full">
      <!--Allow for the user to change the background-->
      <div class="flex flex-col gap-5 w-full m-5">
        <UFileUpload
          v-model="backgroundValue"
          label="Upload Background Image"
          class="backdrop-blur-2xl shadow-2xl"
          size="xl"
          accept="image/*"
          :fileDelete="{
            size: 'xl',
          }"
          :ui="{
            base: 'bg-white/1 backdrop-blur-2xl hover:bg-white/10',
            fileTrailingButton: 'text-3xl',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const backgroundValue = ref<File | null>(null);

watch(backgroundValue, (newFile) => {
  if (!newFile) return;

  console.log("Selected file:", newFile);
  console.log("Name:", newFile.name);
  console.log("Size:", newFile.size);
});
</script>
