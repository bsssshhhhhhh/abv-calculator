<template>
  <div>
    <table>
      <tr class="inputs">
        <th class="right">
          Original Gravity (OG)
        </th>
        <td>
          <abv-input v-model="originalGravity" />
        </td>
      </tr>
      <tr class="inputs">
        <th class="right">
          Final Gravity (FG)
        </th>
        <td>
          <abv-input v-model="finalGravity" />
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
import AbvInput from './AbvInput.vue';

export default defineComponent({
  components: {
    AbvInput
  },
  setup() {
    const originalGravity = ref(1);
    const finalGravity = ref(1);

    const { abvCalculations } = useAbvCalculator({ originalGravity, finalGravity });

    return {
      originalGravity,
      finalGravity,
      abvCalculations
    };
  }
});

</script>

<style lang="scss" scoped>

.right {
  text-align: right;
}

td, th {
  padding: 0.25rem;
}

input {
  padding: 0.35rem;
}

table {
  border-collapse: collapse;
}

.inputs {
  td, th {
    padding: 1rem;
    border: 1px solid #333;

    &:first-child {
      border-right: none;
    }

    &:not(:first-child) {
      border-left: none;
    }
  }
}

</style>
