import ResponsiveLayoutContainer from "./components/layout/responsive-layout-container";
import { Pokemon } from "./types";
import HomeDesktopView from "./views/home-desktop-view";
import HomeMobileView from "./views/home-mobile-view";

async function getPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {
    cache: "no-store", // evita cache en dev, quítalo si quieres cachear
  })
  const data = await response.json()

  return data.results.map((pokemon: any) => {
    const id = pokemon.url.split("/")[6]
    return {
      id,
      name: pokemon.name,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    }
  })
}


export default async function Home() {
  const pokemons = await getPokemons()

  return (
    <ResponsiveLayoutContainer
      mobileView={<HomeMobileView pokemons={pokemons}/>}
      desktopView={<HomeDesktopView pokemons={pokemons}/>}
    />
  );
}
