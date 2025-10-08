import { NarrowConstrainedWrapper } from "../components/layout/narrow-constraint-wrapper";
import PokemonList from "../components/pokemon-list/pokemonList";
import { Pokemon } from "../types/pokemon";

export default function HomeMobileView({
  pokemons,
}: Readonly<{ pokemons: Pokemon[] }>) {
  return (
    <div>
      <NarrowConstrainedWrapper>
        <PokemonList pokemons={pokemons} />
      </NarrowConstrainedWrapper>
    </div>
  );
}
