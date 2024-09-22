import { useRef, useState, useEffect } from "react";
import { Currency, asyncAmountExchange } from './api';


const useExchange = (targetCurrency: Currency) => {
  // 用來儲存需要轉換的金額，以及轉換後對應的結果
  const amountsRef = useRef<Map<number, number | null>>(new Map());
  const [exchange, setExchange] = useState<(v: number) => number | null>(
    // 在一開始還沒有轉換後金額的階段，function 做的是把值放入 Ref 中
    () => (value: number) => {
      amountsRef.current.set(value, null);

      return value;
    }
  );

  const fetchExchange = () => {
    const amounts = [...amountsRef.current.keys()];
    console.log('amounts', amounts);
    
    asyncAmountExchange(amounts, targetCurrency).then((res) => {
      const nextMap = new Map();

      // 把轉換前轉換後的金額儲存在 Map 當中
      res.forEach((exchangedAmount, i) => {
        const originAmount = amounts[i];
        nextMap.set(originAmount, exchangedAmount);
      });

      amountsRef.current = nextMap

      
      setExchange(
        () => (value: number) => {
          // 既然有了值，那 function 的行為就變成拿取轉換後的金額
          const res = amountsRef.current.get(value)

          if (res) return res

          // 但沒有值的金額還是要存起來，讓下次使用
          amountsRef.current.set(value, null); 
          return null
        }
      );
    });
  };


  useEffect(() => {
    fetchExchange();
  }, [targetCurrency]);


  return {
    exchange,
    refetch: fetchExchange,
    del: (value: number) => {
      amountsRef.current.delete(value);
    },
  };
};


function AsyncAsSync() {
  const [amount, setAmount] = useState(100);
  const [currency, setCurrency] = useState<Currency>('USD');
  const { exchange, refetch, del } = useExchange(currency);


  return (
    <div>
      <div className="arithmetic">
        <input
          onChange={(e) => {
            setAmount(Number.isNaN(+e.target.value) ? 0 : +e.target.value);
            del(amount)
          }}
          onBlur={() => {
            refetch()
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
      <p>{`${amount} dollar: ${exchange(amount)} NTD`}</p>
      <p>{`5 dollar: ${exchange(5)} NTD`}</p>
      <p>{`10 dollar: ${exchange(10)} NTD`}</p>
      <p>{`100 dollar: ${exchange(100)} NTD`}</p>
      <p>{`1000 dollar: ${exchange(1000)} NTD`}</p>
    </div>
  );
}



export default AsyncAsSync;