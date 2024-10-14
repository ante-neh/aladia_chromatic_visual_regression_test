<template>
    <div class="space-y-6 text-center">
      <p class="text-gray-400 w-full">
        Recovery link sent to: <span class="text-white">{{ email }}</span>
      </p>
      <p class="text-gray-400">Check your email to change your password!</p>
      <Button>Send Email Again</Button>
    </div>
  </template>
  
  <script setup>
  import Button from '~/components/atoms/Button.vue';
  import { ref } from 'vue';
  
  const email = ref('admasterefe00@gmail.com'); 
  </script>
  