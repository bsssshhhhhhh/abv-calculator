<template>
  <div>
    <input
      type="number"
      step="0.001"
      v-model="value" />
  </div>
</template>


<script lang="ts">
import { useVModel } from '@vueuse/core';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      required: true
    }
  },
  emits: ['input'],
  setup(props, { emit }) {
    const value = useVModel(props, 'modelValue', emit);

    return {
      value
    };
  }
});
</script>

<style scoped>
input {
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
}
</style>