<template>
    <div class="space-y-6">
      <div class="w-full flex items-center justify-between bg-slate-900 px-4 py-2 rounded-lg">
        <Icon src="/img/google.png" alt="Google Sign-in" />
        <div>
          <h3 class="font-semibold text-white">Add a new password</h3>
          <p class="text-gray-400">Your account uses Google Sign-in. Add a new password.</p>
        </div>
      </div>
  
      <div class="text-center">
        <p class="text-white text-lg">Password successfully added!</p>
      </div>
  
      <Button @click="handleClick">Proceed to Aladia</Button>
    </div>
  </template>
  
  <script setup>
    import Button from '~/components/atoms/Button.vue';
    import Icon from '~/components/atoms/Icon.vue'
    const handleClick = () => {
      window.location.href = 'https://develop.aladia.io/';
  };
  </script>
  