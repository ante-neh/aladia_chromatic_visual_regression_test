<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div class="w-full max-w-sm p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <a href="#" class="text-sm text-gray-400 underline">← Back to Log In</a>
        <div class="w-full flex items-center bg-slate-900 px-4 py-2 rounded-lg">
          <Icon src="/img/aladiaLogo.png" alt="Aladia Logo" />
          <div>
            <h2 class="text-center text-lg font-bold text-white">Password Recovery</h2>
            <p class="text-center text-gray-400">
                Retrieve your password account through your registration mail
            </p>
          </div>
        </div>
        <PasswordRecoveryConfirmationForm />
      </div>
    </div>
  </template>
  
  <script setup>
    import { useRoute } from 'vue-router';
    import Icon from '~/components/atoms/Icon.vue';
    import PasswordRecoveryConfirmationForm from '~/components/organisms/PasswordRecoveryConfirmationForm.vue';
    const route = useRoute() 
    const email = route.query.email 
    
  </script>
  