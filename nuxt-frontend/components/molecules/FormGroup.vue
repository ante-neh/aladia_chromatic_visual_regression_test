<template>
    <div>
      <label :for="id" class="sr-only">{{ label }}</label>
      <Input v-model="inputValue" :id="id" :name="name" :type="type" :placeholder="placeholder" />
    </div>
</template>
  
<script setup>
  import { ref,watch, defineProps, defineEmits } from 'vue';
  import Input from '~/components/atoms/InputField.vue';

  const props = defineProps({
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    modelValue: String
  });

  const emit = defineEmits(['update:modelValue']);

  const inputValue = ref(props.modelValue);
  watch(inputValue, (newValue) => {
    emit('update:modelValue', newValue);
  });
</script>
  