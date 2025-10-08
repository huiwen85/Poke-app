import { Pokemon } from "@/app/types/pokemon";
import { css } from "@/styled-system/css";
import PokemonCard from "../card/pokemonCard";
interface Props {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: Readonly<Props>) {
  return (
    <div className={css({ py: "4" })}>
      <h1
        className={css({
          fontSize: "2xl",
          color: "orange.500",
          textAlign: "center",
          fontWeight: "extrabold",
        })}
      >
        World of Pokémon
      </h1>
      <div className={css({ textAlign: "center", mt: "8" })}>
        <ul
          data-testid="pokemon-list"
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 4,
            sm: { gridTemplateColumns: "repeat(3,1fr)" },
            md: { gridTemplateColumns: "repeat(4, 1fr)" },
          })}
        >
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </div>
  );
}
