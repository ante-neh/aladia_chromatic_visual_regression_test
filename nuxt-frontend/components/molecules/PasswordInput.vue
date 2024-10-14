<template>
    <div class="relative">
      <Input :id="id" :name="name" :type="showPassword ? 'text' : 'password'" :placeholder="placeholder" />
      <button
        type="button"
        class="absolute inset-y-0 right-0 flex items-center pr-3"
        @click="togglePassword"
      >
        <img :src="showPassword ? '/img/invisible.png' : '/img/visible.png'" class="w-5 h-5" />
      </button>
    </div>
  </template>
  
  <script setup>
  import Input from '~/components/atoms/InputField.vue';
  import { ref } from 'vue';
  
  const props = defineProps({
    id: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String, default: '' }
  });
  
  const showPassword = ref(false);
  
  function togglePassword() {
    showPassword.value = !showPassword.value;
  }
  </script>
  