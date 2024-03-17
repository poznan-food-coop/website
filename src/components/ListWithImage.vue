<script setup lang="ts">
defineProps<{
  titleFirst: string;
  titleSecond: string;
  backgroundColor: {
    type: string;
    default: "background";
  };
  image: string;
  imagePosition: "left" | "right";
  list: { text: string }[];
}>();
</script>

<template>
  <div
    class="d-flex flex-row"
    :class="`bg-${backgroundColor} ${
      imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'
    }`"
  >
    <div class="w-50 d-inline-block">
      <v-img aspect-ratio="1" cover :src="image" />
    </div>
    <div class="w-50 d-inline-block ma-10">
      <TwoColorTitle
        :titleFirst="titleFirst"
        :titleSecond="titleSecond"
        class="mb-5"
      />
      <v-list
        class="text-primary-darken font-weight-medium text-h6"
        :class="[`bg-${backgroundColor}`]"
      >
        <v-list-item v-for="item in list" :key="item.text">
          <v-icon class="mr-4">mdi-check-bold</v-icon>
          {{ item.text }}</v-list-item
        >
      </v-list>
    </div>
  </div>
</template>
