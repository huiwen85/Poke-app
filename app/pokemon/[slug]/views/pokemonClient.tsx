"use client";

import {
  DehydratedState,
  HydrationBoundary,
  useQuery,
} from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonContent from "../components/pokemonContent";

export default function PokemonClient({
  slug,
  dehydratedState,
}: {
  slug: string;
  dehydratedState: DehydratedState;
}) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <PokemonContent slug={slug} />
    </HydrationBoundary>
  );
}
