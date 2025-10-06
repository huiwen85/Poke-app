"use client";

import { getPokemonBySlug } from "@/app/actions/getPokemonBySlug";
import { useQuery } from "@tanstack/react-query";
import PokemonInformation from "./pokemonInformation";
import Table from "@/app/components/table/table";

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

  return <div>{pokemon && <PokemonInformation pokemon={pokemon} />}</div>;
}
