<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <CodeInput />
    <p class="text-center text-sm text-gray-400">
      You didn't receive any mail?
    </p>
    <Button>Enter</Button>
  </form>
</template>

<script setup>
import CodeInput from '~/components/molecules/CodeInput.vue';
import Button from '~/components/atoms/Button.vue';
import { useRouter } from 'vue-router'; 

const props = defineProps({
  user:{
    type:String,
    default:"aladia"
  }
})

const router = useRouter()

const handleSubmit = ()=>{
  router.push({
    path:"/acknowledgment",
    query:{
      name:props.user
    }
  })
}
</script>
