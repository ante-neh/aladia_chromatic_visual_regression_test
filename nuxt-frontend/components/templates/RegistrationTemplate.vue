<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-slate-900">
      <div class="w-full max-w-sm p-8 space-y-4 bg-gray-800 rounded-lg shadow-lg">
        <a href="/" class="text-sm text-gray-400 underline">← Back to Log In</a>
        <div class="w-full flex items-center justify-between px-4 py-4 rounded-lg">
            <div class="bg-slate-900 rounded-lg">
                <Icon src="/img/aladiaLogo.png" alt="Aladia Logo" />
            </div>
            <div>
                <p class="text-center text-white">Nice to meet you,</p>
                <p class="text-center text-gray-400">Upload a profile picture and complete your presentation</p>
            </div>
        </div>
        <Checkbox v-model="acceptTerms">
            I accept <a href="#" class="underline">Terms & Conditions</a> and <a href="#" class="underline">Privacy Policy</a>
        </Checkbox>
        <p class="text-white text-sm w-full text-center">Enter your details</p>
        <RegistrationForm />
      </div>
    </div>
  </template>
  
  <script setup>
    import Icon from '~/components/atoms/Icon.vue';
    import RegistrationForm from '~/components/organisms/RegistrationForm.vue';
    import Checkbox from "~/components/atoms/Checkbox.vue"
  </script>
  