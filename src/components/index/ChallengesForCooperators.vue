<script setup lang="ts">
import { CardSlider } from "@/types";

const titleFirst: string = "Wyzwania ";
const titleSecond: string = "dla członków kooperatywy";
const backgroundColor = "background-darken";
const cards: CardSlider[] = [
  {
    title: "Jakość",
    text: "Sprostanie określonym wymaganiom względem jakości produktów i rodzaju uprawy/hodowli",
  },
  {
    title: "Zdrowe produkty",
    text: "Nasza kooperatywa oferuje zdrowe produkty od lokalnych dostawców.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
  {
    title: "Lokalni dostawcy",
    text: "Wspieramy lokalnych dostawców, aby promować zdrowy styl życia.",
  },
];
</script>

<template>
  <CardsSlider
    :titleFirst="titleFirst"
    :titleSecond="titleSecond"
    :backgroundColor="backgroundColor"
    :cards="cards"
  />
</template>
