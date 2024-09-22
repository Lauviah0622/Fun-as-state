import { useState, useEffect } from 'react';
import { Currency, asyncAmountExchange } from './api';

function LegacyExchange() {
  const [amount, setAmount] = useState(0);
  const [amountsMap, setAmountsMap] = useState(
    new Map<number, number | null>([
      [5, null],
      [10, null],
      [100, null],
      [1000, null],
    ])
  );
  const [currency, setCurrency] = useState<Currency>('USD');
  // const [exchangedAmounts, setExchangedAmounts] = useState([0])

  const fetchExchangedAmounts = async () => {
    const amounts = [...amountsMap.keys()];
    const exchanged = await asyncAmountExchange(amounts, currency);
    const next = new Map(amountsMap);
    exchanged.forEach((edAmount, i) => {
      next.set(amounts[i], edAmount);
    });

    setAmountsMap(next);
  };

  useEffect(() => {
    fetchExchangedAmounts();
  }, [currency]);

  return (
    <div>
      <div className="arithmetic">
        <input
          onChange={(e) => {
            const value = Number.isNaN(+e.target.value) ? 0 : +e.target.value;
            setAmount(value);
            setAmountsMap((s) => {
              const next = new Map(s);
              next.set(value, next.get(value) ?? null);
              return next;
            });
          }}
          onBlur={() => {
            fetchExchangedAmounts();
          }}
          value={amount}
        />
        <select
          name="currency"
          onChange={(e) => {
            setCurrency(e.target.value as Currency);
          }}
        >
          <option value="USD">USD</option>
          <option value="CNY">CNY</option>
          <option value="JPY">JPY</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <p>{`${amount} dollar: ${amountsMap.get(amount)} NTD`}</p>
      <p>{`5 dollar: ${amountsMap.get(5)} NTD`}</p>
      <p>{`10 dollar: ${amountsMap.get(10)} NTD`}</p>
      <p>{`100 dollar: ${amountsMap.get(100)} NTD`}</p>
      <p>{`1000 dollar: ${amountsMap.get(1000)} NTD`}</p>
    </div>
  );
}

export default LegacyExchange;
