import getPokemons from "./actions/getPokemons";
import ResponsiveLayoutContainer from "./components/layout/responsive-layout-container";
import HomeDesktopView from "./views/homeDesktopView";
import HomeMobileView from "./views/homeMobileView";

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <ResponsiveLayoutContainer
      mobileView={<HomeMobileView pokemons={pokemons} />}
      desktopView={<HomeDesktopView pokemons={pokemons} />}
    />
  );
}
