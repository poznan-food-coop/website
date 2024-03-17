<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 100,
  },
  width: {
    type: Number,
    default: 200,
  },
  fontSize: {
    type: Number,
    default: 18,
  },
  color: {
    type: String,
    default: "primary-darken",
  },
});
</script>

<template>
  <v-sheet
    class="d-flex align-center"
    style="user-select: none; background-color: transparent"
  >
    <Logo :height="height" :width="width / 2" :color="color" />
    <h1
      :style="{
        fontSize: `${fontSize}px`,
        width: `${width / 2}px`,
      }"
      :class="`text-${color}`"
      class="mr-4"
    >
      Poznańska Kooperatywa Spożywcza
    </h1>
  </v-sheet>
</template>
