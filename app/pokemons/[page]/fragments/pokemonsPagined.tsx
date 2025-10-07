"use client";
import getPokemonByPage from "@/app/actions/getPokemonByPage";
import PokemonCard from "@/app/components/card/pokemonCard";
import LoadingSpinner from "@/app/components/loading/loadingSpinner";
import Pagination from "@/app/components/pagination/pagination";
import { Pokemon } from "@/app/types/pokemon";
import { css } from "@/styled-system/css";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function PokemonsPagined({ page }: Readonly<{ page: string }>) {
  const router = useRouter();
  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const itemsPerPage = 12;

  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemons", currentPage],
    queryFn: () => getPokemonByPage(currentPage, itemsPerPage),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const handleChangePage = useCallback((page: number) => {
    router.push(`/pokemons/${page}`);
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: {
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: "24px",
          })}
        >
          {data?.pokemons.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={Number(data?.totalPages)}
        onPageChange={handleChangePage}
      />
    </>
  );
}
