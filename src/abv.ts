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
    const OG = originalGravity.value;
    const FG = finalGravity.value;

    return [
      '131.25 * (OG - FG)',
      '(1.05 / 0.79) * (OG - FG) * 100',
      '(76.08 * (OG - FG) / (1.775 - OG)) * (FG / 0.794)'
    ].map((formula) => {
      return {
        label: formula,
        calculatedAbvPercent: eval(`(OG, FG) => { return ${formula}; }`)(OG, FG)
      }
    });
  });

  return {
    abvCalculations
  };
}