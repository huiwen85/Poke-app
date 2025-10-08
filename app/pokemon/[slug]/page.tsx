import { getPokemonBySlug } from "@/app/actions/getPokemonBySlug";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import ResponsiveLayoutContainer from "@/app/components/layout/responsive-layout-container";
import PokemonMobileView from "./views/pokemonMobileView";
import PokemonDesktopView from "./views/pokemonDesktopView";

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const queryClient = new QueryClient();
  const { slug } = await params;
  await queryClient.prefetchQuery({
    queryKey: ["pokemon", slug],
    queryFn: () => getPokemonBySlug(slug),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <ResponsiveLayoutContainer
      mobileView={
        <PokemonMobileView slug={slug} dehydratedState={dehydratedState} />
      }
      desktopView={
        <PokemonDesktopView slug={slug} dehydratedState={dehydratedState} />
      }
    />
  );
}
