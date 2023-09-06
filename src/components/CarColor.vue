<template>
  <div class="d-flex align-center" :style="{ direction: props.reverse ? 'rtl' : 'ltr' }">
    <span class="mr-3 pa-4 rounded-xl border-sm" :style="colorStyles" />
    <p>{{ props.color.name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { CarColor } from '@/types';

const props = defineProps<{
  color: CarColor;
  reverse?: boolean;
}>();

const colorStyles = computed(() => ({
  backgroundColor: props.color.hex,
}));
</script>
