<template>
  <div class="abv-input">
    <input
      type="number"
      step="0.001"
      v-model="value" />
    <button @click="value -= 0.01">-0.01</button>
    <button @click="value += 0.01">+0.01</button>
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
.abv-input {
  display: flex;
  gap: 1rem;
}

input {
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
}

button {
  border: none;
  background: transparent;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);

  flex-grow: 1;
}
</style>