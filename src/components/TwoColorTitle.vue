<script setup lang="ts">
defineProps<{
  titleFirst: string;
  titleSecond: string;
}>();
</script>

<template>
  <div class="text-h3 font-weight-bold">
    <p class="text-primary d-inline">{{ titleFirst }}</p>
    <p class="text-primary-darken d-inline">
      {{ titleSecond }}
    </p>
  </div>
</template>
