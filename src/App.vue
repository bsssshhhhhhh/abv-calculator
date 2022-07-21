<template>
  <div>
    <table>
      <tr>
        <th class="right">
          Original Gravity (OG)
        </th>
        <td>
          <input
            type="number"
            step="0.01"
            v-model="originalGravity" />
        </td>
      </tr>
      <tr>
        <th class="right">
          Final Gravity (FG)
        </th>
        <td>
          <input
            type="number"
            step="0.01"
            v-model="finalGravity" />
        </td>
      </tr>
      <tr >
        <td style="padding: 1rem" colspan="2">
          <hr />
        </td>
      </tr>

      <tr>
        <th>
          Method
        </th>
        <th>
          Result
        </th>
      </tr>
      <tr v-for="calculation in abvCalculations">
        <th class="right">
          {{ calculation.label }}
        </th>
        <td>
          {{ calculation.calculatedAbvPercent.toFixed(2) }}%
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { useAbvCalculator } from './abv';
import { defineComponent, ref } from 'vue';

export default defineComponent(() => {
  const originalGravity = ref(1);
  const finalGravity = ref(1);

  const { abvCalculations } = useAbvCalculator({ originalGravity, finalGravity });

  return {
    originalGravity,
    finalGravity,
    abvCalculations
  };
});

</script>

<style scoped>

.right {
  text-align: right;
}

td, th {
  padding: 0.25rem;
}

input {
  padding: 0.35rem;
}

</style>
