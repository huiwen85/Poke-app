import { Pokemon } from "@/app/types/pokemon";
import { css } from "@/styled-system/css";
import Link from "next/link";
import { Text } from "pokeapi-ui";

interface Props {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: Readonly<Props>) {
  return (
    <div>
      <Text as="h1">Pokemon List</Text>
      <div className={css({ textAlign: "center", mt: "8" })}>
        {/*<h2 className={css({fontSize: '2xl'})}>Pokemon List</h2>*/}
        <ul
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 4,
            sm: { gridTemplateColumns: "repeat(3,1fr)" },
            md: { gridTemplateColumns: "repeat(4, 1fr)" },
          })}
        >
          {pokemons.map((pokemon) => (
            <Link key={pokemon.id} href={`/pokemon/${pokemon.name}/`}>
              <li
                className={css({
                  borderWidth: "1px",
                  borderRadius: "md",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                })}
              >
                <img src={pokemon.url} alt={pokemon.name} />
                <span>{pokemon.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
