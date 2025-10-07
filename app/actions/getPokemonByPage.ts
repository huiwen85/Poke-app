import { Pokemon } from "../types/pokemon";
import { PokemonInfo } from "../types/pokemonInfo";

interface PokeApiListResponse {
  count: number;
  results: { name: string; url: string }[];
}

export default async function getPokemonByPage(
  currentPage: number,
  itemsPerPage: number,
) {
  const offset = (currentPage - 1) * itemsPerPage;

  try {
    const listResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`,
    );
    if (!listResponse.ok)
      throw new Error(`Failed to fetch Pokemon list: ${listResponse.status}`);

    const listData = (await listResponse.json()) as PokeApiListResponse;
    const totalPages = Math.ceil(listData.count / itemsPerPage);

    const pokemons: Pokemon[] = await Promise.all(
      listData.results.map(async ({ name, url }) => {
        const res = await fetch(url);
        if (!res.ok)
          throw new Error(`Failed to fetch Pokemon details: ${res.status}`);

        const details = (await res.json()) as PokemonInfo;

        return {
          id: details.id,
          name: details.name,
          url:
            details.sprites?.other?.["official-artwork"]?.front_default ?? "",
        };
      }),
    );

    return { pokemons, totalPages };
  } catch (error: any) {
    console.error("Error fetching Pokemons:", error);
    throw new Error("Failed to fetch Pokemons.");
  }
}
