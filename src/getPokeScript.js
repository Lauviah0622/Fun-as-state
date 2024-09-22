const list = [
  'Bulbasaur',
  'Ivysaur',
  'Venusaur',
  'Charmander',
  'Charmeleon',
  'Charizard',
  'Squirtle',
  'Wartortle',
];

const getAPoke = async (name) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLocaleLowerCase()}`
  );

  const json = await res.json()

  const keys = ['abilities', 'height', 'id', 'weight', 'name', 'types', (d) => {


    return ['sprite', d.sprites.front_default];

  }];

  const dd = keys.reduce((result, getter) => {
    if (typeof getter === 'string') {
      result[getter] = json[getter];
    } else if (typeof getter === 'function') {
      const [k, data] = getter(json);
      result[k] = data;
    }

    return result;
  }, {})

  return dd
  
  
};




const main = () => {
  Promise.all(list.map(getAPoke)).then((p) => {
    console.log(JSON.stringify(p));
  });
};

main()
