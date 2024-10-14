<template>
  <form @submit.prevent="handleClick" class="space-y-2">
    <div class="space-y-2">
      <p class="text-center text-gray-400">Enter your password</p>
      <PasswordInput id="password" name="password" placeholder="Password" />
      <div class="flex justify-end">
        <a href="/password-recovery" class="text-sm text-gray-400 underline">Forgot Password?</a>
      </div>
    </div>
    <Button>Enter</Button>
  </form>
</template>

<script setup>
  import PasswordInput from '~/components/molecules/PasswordInput.vue';
  import Button from '~/components/atoms/Button.vue';
  const handleClick = () => {
      alert("Aladia Dashboard")
  };
</script>

  