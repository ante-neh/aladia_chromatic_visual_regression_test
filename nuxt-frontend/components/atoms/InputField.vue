<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    required
    class="w-full px-3 py-2 border border-gray-700 rounded-md text-gray-500 bg-white outline-none focus:ring-2"
  />
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue:String,
});
</script>
