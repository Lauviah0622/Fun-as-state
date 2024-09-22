import { ReactNode, useState } from 'react';
import { pokemons, Pokemon } from '../../data';

type Render = (p: Pokemon) => ReactNode;

type ChildProps = { render: Render };

function ValuePass() {
  const [render, setRender] = useState<Render>(() => (p) => p.id);
  return (
    <div>
      <div className='box'>
        <h3>parent</h3>
        <button
          onClick={() => {
            setRender(() => renderSprite);
          }}
        >
          sprite
        </button>

        <button
          onClick={() => {
            setRender(() => renderInfo);
          }}
        >
          info
        </button>

        <button
          onClick={() => {
            setRender(() => renderType);
          }}
        >
          types
        </button>
        <button
          onClick={() => {
            setRender(() => renderAbilities);
          }}
        >
          abilities
        </button>
      </div>
      <div className='container'>
        <Bulbasaur render={render} />
        <Ivysaur render={render} />
        <Venusaur render={render} />
      </div>
    </div>
  );
}


const Child = ({children}) => {
  return (
    <div className="box">
      <h3>child</h3>
      {children}
    </div>
  );
}

const Bulbasaur = ({ render }: ChildProps) => {
  const p = pokemons[0];
  return <Child>{render(p)}</Child>;
};


const Ivysaur = ({ render }: ChildProps) => {
  const p = pokemons[1];
  return <Child>{render(p)}</Child>;
};
const Venusaur = ({ render }: ChildProps) => {
  const p = pokemons[2];
  return <Child>{render(p)}</Child>;
};

const renderSprite = (p: Pokemon) => {
  return (
    <div>
      <p>{p.name}</p>
      <img src={p.sprite} />
    </div>
  );
};

const renderInfo = (p: Pokemon) => {
  return (
    <div>
      <p>{p.name}</p>
      <ul>
        <li>weight:{p.weight}</li>
        <li>height: {p.height}</li>
      </ul>
    </div>
  );
};

const renderType = (p: Pokemon) => {
  return (
    <div>
      <p>{p.name}</p>
      <ul>
        {p.types.map((t) => (
          <li>{t.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

const renderAbilities = (p: Pokemon) => {
  return (
    <div>
      <p>{p.name}</p>
      <ul>
        {p.abilities.map((a) => (
          <li>{`${a.slot}: ${a.ability.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ValuePass;
