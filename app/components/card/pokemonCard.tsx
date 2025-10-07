import { Pokemon } from "@/app/types/pokemon";
import { css } from "@/styled-system/css";
import Link from "next/link";

export default function PokemonCard({
  pokemon,
}: Readonly<{ pokemon: Pokemon }>) {
  return (
    <Link key={pokemon.id} href={`/pokemon/${pokemon.name}/`}>
      <li
        className={css({
          boxShadow: "md",
          borderRadius: "md",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bg: "neutral.100",
        })}
      >
        <div className={css({ flex: 1 })}>
          <img src={pokemon.url} alt={pokemon.name} />
        </div>

        <div className={css({ w: "full", bg: "orange.100", p: 2 })}>
          <div
            className={css({
              w: "full",
              display: "flex",
              justifyContent: "space-between",
            })}
          >
            <h1 className={css({ fontSize: "xl" })}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h1>
            <p>{`#${pokemon.id}`}</p>
          </div>
        </div>
      </li>
    </Link>
  );
}
