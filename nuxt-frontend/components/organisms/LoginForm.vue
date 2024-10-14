<template>
  <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
    <FormGroup id="email" v-model="email" name="email" type="email" placeholder="Email Address" />
    <Button>Enter</Button>
    <div class="relative flex justify-center text-sm text-gray-400">
      <span class="px-2 bg-gray-800">Or</span>
    </div>
    <SocialLogin />
    <div class="text-center text-sm text-gray-500 mt-6">
      <a href="#" class="hover:underline">Terms & Conditions</a>
    </div>
  </form>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import FormGroup from '~/components/molecules/FormGroup.vue';
    import Button from '~/components/atoms/Button.vue';
    import SocialLogin from '~/components/molecules/SocialLogin.vue';
    import { checkIfUserExists } from '~/services/user'; 

    const email = ref('')
    const router = useRouter() 

    function handleLogin(){
      if(checkIfUserExists(email.value)){
        router.push('/password')
      }else{
        router.push('/register')
      }
    }
</script>
