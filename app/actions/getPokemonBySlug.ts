import { PokemonInfo } from "../types/pokemonInfo";

export async function getPokemonBySlug(
  slug: string,
): Promise<PokemonInfo | undefined> {
  const searchSlug = slug.trim().toLowerCase();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchSlug}`,
    );
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    console.log(error);
    throw new Error(`Pokemon by ${slug} not found`);
  }
}
