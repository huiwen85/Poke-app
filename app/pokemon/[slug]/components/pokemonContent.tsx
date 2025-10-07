"use client";

import { getPokemonBySlug } from "@/app/actions/getPokemonBySlug";
import { useQuery } from "@tanstack/react-query";
import PokemonInformation from "../fragments/pokemonInformation";
import LoadingSpinner from "@/app/components/loading/loadingSpinner";

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

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar Pokémon</p>;

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {pokemon && <PokemonInformation pokemon={pokemon} />}
    </div>
  );
}
