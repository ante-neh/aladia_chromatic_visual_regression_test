<template>
    <div class="space-y-6">
      <div class="w-full flex items-center justify-between bg-slate-900 px-4 py-2 rounded-lg">
        <Icon src="/img/google.png" alt="Google Sign-in" />
        <div>
          <h3 class="font-semibold text-white">Add a new password</h3>
          <p class="text-gray-400">Your account uses Google Sign-in. Add a new password.</p>
        </div>
      </div>
  
      <div class="space-y-4">
        <PasswordInput id="password" name="password" placeholder="Password" />
        <PasswordInput id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
      </div>

      <Button @click="handleClick">Create New Password</Button>
    </div>
  </template>
  
  <script setup>
    import { useRouter } from 'vue-router'
    import PasswordInput from '~/components/molecules/PasswordInput.vue';
    import Button from '~/components/atoms/Button.vue';
    import Icon from '~/components/atoms/Icon.vue';
    const router = useRouter()
    const handleClick = ()=>{
      router.push("/password-success")
    }
  </script>
  