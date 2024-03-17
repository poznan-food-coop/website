<script setup lang="ts">
import { CardSlider } from "@/types";

defineProps<{
  titleFirst: string;
  titleSecond: string;
  backgroundColor: {
    type: string;
    default: "background-darken";
  };
  cards: CardSlider[];
}>();
</script>

<template>
  <div class="pa-10" :class="[`bg-${backgroundColor}`]">
    <TwoColorTitle
      :titleFirst="titleFirst"
      :titleSecond="titleSecond"
      class="mb-6"
    />
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="card in cards" :key="card.title">
        <v-card
          class="ma-4 text-primary-darken"
          prepend-icon="mdi-check-bold"
          :title="card.title"
          :text="card.text"
          width="350"
          style="border-top: 5px solid rgb(var(--v-theme-primary))"
        >
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>
