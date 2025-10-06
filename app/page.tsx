import ResponsiveLayoutContainer from "./components/layout/responsive-layout-container";
import { Pokemon } from "./types/pokemon";
import HomeDesktopView from "./views/homeDesktopView";
import HomeMobileView from "./views/homeMobileView";

async function getPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {});
  const data = await response.json();

  return data.results.map((pokemon: any) => {
    const id = pokemon.url.split("/")[6];
    return {
      id,
      name: pokemon.name,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });
}

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <ResponsiveLayoutContainer
      mobileView={<HomeMobileView pokemons={pokemons} />}
      desktopView={<HomeDesktopView pokemons={pokemons} />}
    />
  );
}
