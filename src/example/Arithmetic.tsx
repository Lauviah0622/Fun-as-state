import { useState } from 'react';

function Arithmetic() {
  const [operation, setOperation] = useState(
    () => (a: number, b: number) => a + b
  );

  const [operands, setOperands] = useState([1, 2] as [number, number]);
  return (
    <div className='arithmetic'>
      <input
        onChange={(e) => {
          setOperands((o) => [+e.target.value, o[1]]);
        }}
        value={operands[0]}
      />

      <button onClick={() => {setOperation(() => (a: number, b: number) => a + b)}}>+</button>
      <button onClick={() => {setOperation(() => (a: number, b: number) => a - b)}}>-</button>
      <button onClick={() => {setOperation(() => (a: number, b: number) => a * b)}}>*</button>
      <button onClick={() => {setOperation(() => (a: number, b: number) => a / b)}}>/</button>
      <button onClick={() => {setOperation(() => (a: number, b: number) => a ** b)}}>**</button>
      <input
        onChange={(e) => {
          setOperands((o) => [o[0], +e.target.value]);
        }}
        value={operands[1]}
      />
      <span className='result'>{`= ${operation(operands[0], operands[1])}`}</span>
    </div>
  );
}

export default Arithmetic;