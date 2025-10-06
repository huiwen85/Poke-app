import { getPokemonBySlug } from "@/app/actions/getPokemonBySlug";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import PokemonClient from "./views/pokemonClient";

export default async function PokemonPage({
  params,
}: {
  params: { slug: string };
}) {
  const queryClient = new QueryClient();
  const { slug } = await params;
  await queryClient.prefetchQuery({
    queryKey: ["pokemon", slug],
    queryFn: () => getPokemonBySlug(slug),
  });
  const dehydratedState = dehydrate(queryClient);

  return <PokemonClient slug={slug} dehydratedState={dehydratedState} />;
}
