"use client";

import { getPokemonBySlug } from "@/app/actions/getPokemonBySlug";
import { useQuery } from "@tanstack/react-query";
import PokemonInformation from "../fragments/pokemonInformation";
import LoadingSpinner from "@/app/components/loading/loadingSpinner";
import { css } from "@/styled-system/css";

export default function PokemonContent({ slug }: { slug: string }) {
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemon", slug],
    queryFn: () => getPokemonBySlug(slug),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return (
    <div>
      {error && (
        <p className={css({ pt: 4, textAlign: "center" })}>Pokémon not found</p>
      )}
      {isLoading && <LoadingSpinner />}
      {pokemon && <PokemonInformation pokemon={pokemon} />}
    </div>
  );
}
