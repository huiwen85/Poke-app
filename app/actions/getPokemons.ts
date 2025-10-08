import { Pokemon } from "../types/pokemon";

export default async function getPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {});
  const data = await response.json();

  return data.results.map((pokemon: any) => {
    const id = pokemon.url.split("/")[6];
    return {
      id,
      name: pokemon.name,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });
}
