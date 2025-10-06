import { DehydratedState, HydrationBoundary } from "@tanstack/react-query";
import PokemonContent from "../components/pokemonContent";
import { NarrowConstrainedWrapper } from "@/app/components/layout/narrow-constraint-wrapper";

export default function PokemonDesktopView({
  slug,
  dehydratedState,
}: {
  slug: string;
  dehydratedState: DehydratedState;
}) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <NarrowConstrainedWrapper>
        <PokemonContent slug={slug} />
      </NarrowConstrainedWrapper>
    </HydrationBoundary>
  );
}
