<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div class="w-full max-w-sm p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <div class="w-full flex items-center bg-slate-900 px-4 py-2 rounded-lg">
          <Icon src="/img/aladiaLogo.png" alt="Aladia Logo" />
          <div>
            <h2 class="text-center text-lg font-bold text-white">Welcome to Aladia,</h2>
            <p class="text-center text-md text-gray-400">Create or access your account from here</p>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  </template>
  
  <script setup>
        import Icon from '~/components/atoms/Icon.vue';
        import LoginForm from '~/components/organisms/LoginForm.vue';
  </script>
  