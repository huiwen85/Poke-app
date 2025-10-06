import PokemonList from "../components/pokemon-list/pokemonList";
import { Pokemon } from "../types/pokemon";

export default function HomeDesktopView({
  pokemons,
}: Readonly<{ pokemons: Pokemon[] }>) {
  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
