<template>
    <div class="flex flex-col items-center space-y-6">
      <h2 class="text-center text-xl font-bold text-white">{{ userName }},</h2>
      <p class="text-center text-gray-400">Thanks for joining Aladia.</p>
      <Icon src="/img/aladiaLogo.png" alt="Aladia Logo" />
      <Button @click="handleClick">Enter Marketplace</Button>
    </div>
  </template>
  
  <script setup>

    import Icon from '~/components/atoms/Icon.vue';
    import Button from '~/components/atoms/Button.vue';
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const userName = route.query.name  

    const handleClick = () => {
     alert("Aladia Dashboard")
    };

  </script>
  