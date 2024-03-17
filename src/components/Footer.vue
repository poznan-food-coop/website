<script setup lang="ts">
import LogoWithText from "./LogoWithText.vue";

interface SocialButton {
  name: string;
  icon: string;
  link: string;
}

const buttons: SocialButton[] = [
  {
    name: "Facebook",
    icon: "mdi-facebook",
    link: "https://www.facebook.com/PoznanskaKooperatywaSpozywcza",
  },
  {
    name: "Instagram",
    icon: "mdi-instagram",
    link: "https://www.instagram.com/poznanskakooperatywaspozywcza",
  },
  {
    name: "YouTube",
    icon: "mdi-youtube",
    link: "https://www.youtube.com/@poznanskakooperatywaspozyw6407",
  },
];
</script>
<template>
  <v-footer class="d-flex flex-column" color="primary-darken">
    <div class="d-flex w-100 justify-center align-center">
      <LogoWithText color="background" />
      <div class="ml-5">
        <div class="d-flex justify-center font-weight-bold">
          Znajdziesz nas na:
        </div>
        <v-btn
          v-for="button in buttons"
          :key="button.name"
          :icon="button.icon"
          :href="button.link"
          class="mx-2"
          variant="text"
        ></v-btn>
      </div>
    </div>
  </v-footer>
</template>
