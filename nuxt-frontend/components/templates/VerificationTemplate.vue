<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div class="w-full max-w-sm p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <div class="w-full flex justify-center">
            <Icon src="/img/aladiaLogo.png" alt="Aladia Logo" />
        </div>
        <h2 class="text-center text-xl font-bold text-white">{{ userName }}</h2>
        <p class="text-center text-gray-400">Thanks for joining Aladia.</p>
        <p class="text-center text-gray-400">Please enter below the 6-digit code we sent you through your registration e-mail:</p>
        <VerificationForm  :user="name"/>
      </div>
    </div>
  </template>
  
  <script setup>
    import Icon from '@/components/atoms/Icon.vue';
    import VerificationForm from '@/components/organisms/VerificationForm.vue';
    import { useRoute } from 'vue-router';

    const route = useRoute() 
    const name = route.query.name || "Aladia"
    const surname = route.query.name || "Aladia"
    const userName = `${name} ${surname}`; 
  </script>
  