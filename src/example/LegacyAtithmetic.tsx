import { useState } from 'react';

function LegacyAtithmetic() {
  const operationsMap: Record<string, (a: number, b: number) => number> = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
    '**': (a: number, b: number) => a ** b,
  };

  const [operation, setOperation] = useState('+');

  const [operands, setOperands] = useState([1, 2] as [number, number]);
  return (
    <div className="arithmetic">
      <input
        onChange={(e) => {
          setOperands((o) => [+e.target.value, o[1]]);
        }}
        value={operands[0]}
      />
      <button
        onClick={() => {
          setOperation('+');
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setOperation('-');
        }} 
      >
        -
      </button>
      <button
        onClick={() => {
          setOperation('*');
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          setOperation('/');
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          setOperation('**');
        }}
      >
        **
      </button>
      <input
        onChange={(e) => {
          setOperands((o) => [o[0], +e.target.value]);
        }}
        value={operands[1]}
      />
      <span className="result">{`= ${operationsMap[operation](
        operands[0],
        operands[1]
      )}`}</span>
    </div>
  );
}

export default LegacyAtithmetic;