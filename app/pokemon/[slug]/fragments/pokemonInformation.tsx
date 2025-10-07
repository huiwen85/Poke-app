import Table from "@/app/components/table/table";
import { PokemonInfo } from "@/app/types/pokemonInfo";
import { css } from "@/styled-system/css";
import BaseStats from "../components/baseStats";

interface Props {
  pokemon: PokemonInfo;
}

export default function PokemonInformation({ pokemon }: Readonly<Props>) {
  return (
    <>
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: {
            base: "1fr",
            sm: "repeat(2, 1fr)",
          },
          rowGap: 4,
          py: 4,
        })}
      >
        <div
          className={css({
            bg: "neutral.100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            borderRadius: "md",
          })}
        >
          <img
            src={pokemon.sprites.other?.["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </div>
        <div
          className={css({ display: "flex", flexDirection: "column", px: 4 })}
        >
          <h1
            className={css({
              fontSize: "2xl",
              textAlign: "start",
              fontWeight: "extrabold",
            })}
          >
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h1>
          <div className={css({ display: "flex", spaceX: 2 })}>
            {pokemon.types.map((type, ind) => (
              <span
                key={ind}
                className={css({
                  px: "3",
                  py: "1",
                  borderRadius: "full",
                  fontSize: "sm",
                  textTransform: "capitalize",
                  bg: "yellow.200",
                })}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <BaseStats pokemon={pokemon} />
        </div>
      </div>
      <Table pokemon={pokemon} />
    </>
  );
}
