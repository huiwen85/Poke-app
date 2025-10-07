import ResponsiveLayoutContainer from "@/app/components/layout/responsive-layout-container";
import PokemonsMobileView from "./views/pokemonsMobileView";
import PokemonsDesktopView from "./views/pokemonsDesktopView";

export default async function PokemonsPage({
  params,
}: {
  params: { page: string };
}) {
  const { page } = await params;

  return (
    <ResponsiveLayoutContainer
      mobileView={<PokemonsMobileView page={page} />}
      desktopView={<PokemonsDesktopView page={page} />}
    />
  );
}
