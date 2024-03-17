<script setup lang="ts">
import TwoColorTitle from "./TwoColorTitle.vue";

defineProps<{
  titleFirst: string;
  titleSecond: string;
  backgroundColor: string;
  text: string;
  actionText: string;
  actionLink: string;
}>();
</script>
<template>
  <div
    :class="`bg-${backgroundColor}`"
    class="d-flex align-center justify-center text-center pa-10"
  >
    <v-card variant="text" max-width="800">
      <TwoColorTitle :titleFirst="titleFirst" :titleSecond="titleSecond" />
      <p class="text-primary-darken text-h5 my-4">{{ text }}</p>
      <v-btn size="x-large" rounded="lg" color="secondary" :to="actionLink">{{
        actionText
      }}</v-btn>
    </v-card>
  </div>
</template>
