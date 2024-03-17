<script setup lang="ts">
import { ImageSlider } from "@/types";

defineProps<{
  slides: ImageSlider[];
}>();
</script>

<template>
  <v-carousel
    height="800"
    :show-arrows="false"
    cycle
    hide-delimiter-background
    style="user-select: none"
  >
    <v-carousel-item
      v-for="slide in slides"
      :key="slide.title"
      :src="slide.image"
      cover
    >
      <div class="d-flex align-center" style="height: 100%">
        <v-card variant="text" :color="slide.color" width="600" class="ml-15">
          <p class="text-h2 font-weight-bold">{{ slide.title }}</p>
          <p class="text-h5 font-weight-medium">{{ slide.text }}</p>
        </v-card>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
