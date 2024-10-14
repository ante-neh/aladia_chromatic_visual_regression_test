<template>
  <div class="flex justify-center space-x-2">
    <Input
      v-for="(val, index) in inputValues"
      :key="index"
      v-model="inputValues[index]"
      class="w-12 h-12 text-center text-xl"
      maxlength="1"
      :data-testid="`input-${index}`"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Input from "~/components/atoms/InputField.vue";

const props = defineProps({
  initialValues: {
    type: Array,
    default: () => ["", "", "", "", "", ""],
  },
});

const emit = defineEmits(["input"]);

const inputValues = ref([...props.initialValues]);

// Watch for changes in initialValues and update inputValues accordingly
watch(
  () => props.initialValues,
  (newValues) => {
    inputValues.value = [...newValues];
  }
);

// Emit updated inputValues when any input changes
watch(inputValues, (newValues) => {
  emit("input", newValues);
});
</script>
