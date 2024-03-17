<script setup lang="ts">
import LogoWithText from "./LogoWithText.vue";
</script>

<template>
  <v-app-bar
    flat
    absolute
    height="100"
    class="text-primary-darken bg-background"
  >
    <LogoWithText />

    <v-spacer></v-spacer>

    <v-btn size="large" class="font-weight-bold" prepend-icon="mdi-magnify">
      Szukaj
    </v-btn>
    <v-btn size="large" class="font-weight-bold">Jak do nas dołączyć?</v-btn>
    <v-btn size="large" class="font-weight-bold">Kontakt</v-btn>
  </v-app-bar>
</template>
