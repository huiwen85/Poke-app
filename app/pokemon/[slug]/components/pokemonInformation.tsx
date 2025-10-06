"use client";

import Table from "@/app/components/table/table";
import { PokemonInfo } from "@/app/types/pokemonInfo";

interface Props {
  pokemon: PokemonInfo;
}

export default function PokemonInformation({ pokemon }: Readonly<Props>) {
  return (
    <div>
      <div>{pokemon.name}</div>
      <img
        src={pokemon.sprites.other?.["official-artwork"].front_default}
        alt={pokemon.name}
        className="w-full h-auto"
      />
      <Table pokemon={pokemon} />
    </div>
  );
}
