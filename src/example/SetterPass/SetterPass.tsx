import { ReactNode, useState } from 'react';
import { pokemons, Pokemon } from '../../data';

type Render = (p: Pokemon) => ReactNode;

type ChildProps = { render: Render };

function ValuePass() {
  const data = pokemons;
  const [render, setRender] = useState<Render>(() => (p) => p.id);
  return (
    <div>
      <div className="box">
        <h3>parent</h3>
        <div className="container">{data.map(render)}</div>
      </div>
      <div className="container">
        <RenderSprite setRender={setRender} />
        <RenderInfo setRender={setRender} />
        <RenderType setRender={setRender} />
        <RenderAbilities setRender={setRender} />
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

const RenderType = ({ setRender }) => {
  return (
    <Child>
      <button
        onClick={() => {
          setRender(() => renderType);
        }}
      >
        types
      </button>
    </Child>
  );
};
const RenderSprite = ({ setRender }) => {
  return (
    <Child>
      <button
        onClick={() => {
          setRender(() => renderSprite);
        }}
      >
        types
      </button>
    </Child>
  );
};
const RenderInfo = ({ setRender }) => {
  return (
    <Child>
      <button
        onClick={() => {
          setRender(() => renderInfo);
        }}
      >
        types
      </button>
    </Child>
  );
};
const RenderAbilities = ({ setRender }) => {
  return (
    <Child>
      <button
        onClick={() => {
          setRender(() => renderAbilities);
        }}
      >
        types
      </button>
    </Child>
  );
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
