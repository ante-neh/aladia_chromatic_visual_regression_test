<template>
  <img :src="src" :alt="alt" class="w-28 h-24" />
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: 'Logo' },
});
</script>
