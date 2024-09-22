
export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type Pokemon = {
  abilities: Ability[];
  height: number;
  id: number;
  weight: number;
  name: string;
  types: PokemonType[];
  sprite: string
};

export const pokemons: Pokemon[] = [
  {
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 7,
    id: 1,
    weight: 69,
    name: 'bulbasaur',
    types: [
      {
        slot: 1,
        type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
      },
      {
        slot: 2,
        type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
      },
    ],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 10,
    id: 2,
    weight: 130,
    name: 'ivysaur',
    types: [
      {
        slot: 1,
        type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
      },
      {
        slot: 2,
        type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
      },
    ],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 20,
    id: 3,
    weight: 1000,
    name: 'venusaur',
    types: [
      {
        slot: 1,
        type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
      },
      {
        slot: 2,
        type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
      },
    ],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    abilities: [
      {
        ability: {
          name: 'blaze',
          url: 'https://pokeapi.co/api/v2/ability/66/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 6,
    id: 4,
    weight: 85,
    name: 'charmander',
    types: [
      {
        slot: 1,
        type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
      },
    ],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    abilities: [
      {
        ability: {
          name: 'blaze',
          url: 'https://pokeapi.co/api/v2/ability/66/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 11,
    id: 5,
    weight: 190,
    name: 'charmeleon',
    types: [
      {
        slot: 1,
        type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
      },
    ],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    abilities: [
      {
        ability: {
          name: 'blaze',
          url: 'https://pokeapi.co/api/v2/ability/66/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'solar-power',
          url: 'https://pokeapi.co/api/v2/ability/94/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 17,
    id: 6,
    weight: 905,
    name: 'charizard',
    types: [
      {
        slot: 1,
        type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
      },
      {
        slot: 2,
        type: { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
      },
    ],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  },
  {
    abilities: [
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'rain-dish',
          url: 'https://pokeapi.co/api/v2/ability/44/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 5,
    id: 7,
    weight: 90,
    name: 'squirtle',
    types: [
      {
        slot: 1,
        type: { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
      },
    ],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    abilities: [
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'rain-dish',
          url: 'https://pokeapi.co/api/v2/ability/44/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    height: 10,
    id: 8,
    weight: 225,
    name: 'wartortle',
    types: [
      {
        slot: 1,
        type: { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
      },
    ],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  },
];
