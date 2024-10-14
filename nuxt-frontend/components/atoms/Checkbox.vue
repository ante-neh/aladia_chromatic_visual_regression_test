<template>
  <div class="flex items-center">
    <input
     type="checkbox" 
     :checked="modelValue" 
     @input="$emit('update:modelValue', $event.target.checked)"
     id="terms" 
     class="mr-2" />
    <label for="terms" class="text-gray-400 text-sm">
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
});
</script>
