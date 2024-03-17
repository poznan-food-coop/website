<script setup lang="ts">
const titleFirst: string = "Jak dołączyć ";
const titleSecond: string = "do Kooperatywy?";
const backgroundColor = "background-darken";
const text =
  "Aby dołączyć do Kooperatywy, wystarczy wypełnić formularz zgłoszeniowy. Po weryfikacji, otrzymasz dostęp do naszego sklepu internetowego.";
const actionText = "Dołącz teraz";
const actionLink = "/join";
</script>

<template>
  <CenterCard
    :titleFirst="titleFirst"
    :titleSecond="titleSecond"
    :backgroundColor="backgroundColor"
    :text="text"
    :actionText="actionText"
    :actionLink="actionLink"
  />
</template>
