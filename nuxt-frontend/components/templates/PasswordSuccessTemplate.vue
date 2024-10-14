<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div class="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 class="text-center text-xl font-bold text-white">Password Recovery</h2>
        <PasswordSuccessForm />
      </div>
    </div>
  </template>
  
  <script setup>
  import PasswordSuccessForm from '~/components/organisms/PasswordSuccessForm.vue';
  </script>
  