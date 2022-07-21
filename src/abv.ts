import { computed, Ref } from 'vue';

interface AbvCalculatorOptions {
  originalGravity: Ref<number>;
  finalGravity: Ref<number>;
}

interface AbvCalculation {
  label: string;
  calculatedAbvPercent: number;
}

export function useAbvCalculator({ originalGravity, finalGravity }: AbvCalculatorOptions) {
  const abvCalculations = computed(() => {
    return <AbvCalculation[]>[
      {
        label: '131.25 * (OG - FG)',
        calculatedAbvPercent: 131.25 * (originalGravity.value - finalGravity.value)
      },
      {
        label: '(76.08 * (OG - FG) / (1.775 - OG)) * (FG / 0.794)',
        calculatedAbvPercent: (76.08 * (originalGravity.value - finalGravity.value) / (1.775 - originalGravity.value)) * (finalGravity.value / 0.794)
      }
    ];
  });

  return {
    abvCalculations
  };
}