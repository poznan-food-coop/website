<script setup lang="ts">
import firstImage from "@/assets/slider/0.jpg";
import secondImage from "@/assets/slider/1.jpg";
import thirdImage from "@/assets/slider/2.jpg";
import { ImageSlider } from "@/types";

const slides: ImageSlider[] = [
  {
    title: "Chcesz być z nami?",
    text: "Zostań członkiem naszej kooperatywy i ciesz się dostępem do zdrowych produktów.",
    color: "white",
    image: firstImage,
  },
  {
    title: "Zdrowe produkty",
    text: "Nasza kooperatywa oferuje zdrowe produkty od lokalnych dostawców.",
    color: "white",
    image: secondImage,
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
    color: "white",
    image: thirdImage,
  },
];
</script>

<template>
  <ImagesSlider :slides="slides" />
</template>
