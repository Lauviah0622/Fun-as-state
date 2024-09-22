
const exchangeRates = {
  USD: 30,
  CNY: 5,
  JPY: 0.2,
  EUR: 4,
} as const;

export type Currency = keyof typeof exchangeRates;

export const asyncAmountExchange = (
  amountNumbers: number[],
  targetCurrency: Currency
) => {
  return new Promise<number[]>((res) => {
    setTimeout(() => {
      res(amountNumbers.map((a) => exchangeRates[targetCurrency] * a));
    }, 1000);
  });
};