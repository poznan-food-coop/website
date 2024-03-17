<script setup lang="ts">
import image from "@/assets/slider/0.jpg";

const titleFirst = "Jakie korzyści ";
const titleSecond = "płyną z bycia członkiem kooperatywy?";
const backgroundColor = "background";
const imagePosition = "left";
const list = [
  {
    text: "Dostęp do zdrowych produktów",
  },
  {
    text: "Wsparcie lokalnych dostawców",
  },
  {
    text: "Możliwość współdecydowania",
  },
  {
    text: "Zniżki na produkty",
  },
  {
    text: "Wspólne wydarzenia",
  },
  {
    text: "Wspólne wyjazdy",
  },
];
</script>

<template>
  <ListWithImage
    :titleFirst="titleFirst"
    :titleSecond="titleSecond"
    :backgroundColor="backgroundColor"
    :image="image"
    :imagePosition="imagePosition"
    :list="list"
  />
</template>
