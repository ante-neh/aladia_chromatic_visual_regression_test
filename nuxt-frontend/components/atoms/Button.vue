<template>
  <button
    class="w-full flex justify-center py-2 px-4 border border-slate-900 rounded-md text-white bg-slate-900 hover:bg-gray-600 focus:outline-none"
  >
    <img v-if="iconSrc" :src="iconSrc" :alt="iconAlt" class="w-5 h-5 mr-2" />
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    iconSrc: { type: String, default: null },
    iconAlt: { type: String, default: '' },
  });
</script>
