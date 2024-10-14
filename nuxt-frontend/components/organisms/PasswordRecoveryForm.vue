<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="space-y-2">
        <p class="text-center text-gray-400">Enter recovery mail</p>
        <p class="text-center text-gray-400 text-sm">
            A recovery mail will be sent to this address. Be sure that it is correct before submitting.
        </p>
      </div>
      <div class="flex justify-center space-x-2">
          <Icon src="/img/aladiaLogo.png" alt="Icon" />
          <Icon src="/img/email.png" alt="Email Icon" />
          <Icon src="/img/lock.png" alt="Lock Icon" />
      </div>
      <FormGroup v-model="email" id="email" name="email" type="email" placeholder="Recovery E-mail" />
      <Button>Enter</Button>
    </form>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import FormGroup from '~/components/molecules/FormGroup.vue';
    import Button from '/components/atoms/Button.vue';
    import Icon from '~/components/atoms/Icon.vue';

    const email = ref('')
    const router = useRouter() 

    const handleSubmit = () => {
      if (email.value) {
        router.push({
          path: '/password-recovery-confirmation',
          query: {
            email: email.value,
          },
        });
      } else {
        alert('Please enter a valid email');
      }
    };
  </script>
  