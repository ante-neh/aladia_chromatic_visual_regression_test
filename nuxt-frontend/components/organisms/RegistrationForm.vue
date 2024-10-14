<template>
  <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
    <FormGroup v-model:="name" id="name" name="name" placeholder="Name" />
    <FormGroup v-model:="surname" id="surname" name="surname" placeholder="Surname" />
    <FormGroup v-model:="email" id="email" name="email" type="email" placeholder="Email Address" />
    <PasswordInput v-model:="password" id="password" name="password" placeholder="Password" />
    <PasswordInput v-model:="confirmPasssword" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
    <Button>Enter</Button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import FormGroup from '~/components/molecules/FormGroup.vue';
import PasswordInput from '~/components/molecules/PasswordInput.vue';
import Button from '~/components/atoms/Button.vue';
const router = useRouter() 
const name = ref('')
const surname = ref('') 
const email = ref('')
const password = ref('')
const confirmPasssword = ref('') 

const handleSubmit = ()=>{
  router.push({
    path:"/verification",
    query:{
      name:name.value,
      surname:surname.value
    }
  })
}
const acceptTerms = ref(false);
</script>
