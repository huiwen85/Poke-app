import { PokemonInfo } from "@/app/types/pokemonInfo";
import { css } from "@/styled-system/css";

export default function BaseStats({
  pokemon,
}: Readonly<{ pokemon: PokemonInfo }>) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "4",
        pt: 6,
      })}
    >
      <h3
        className={css({
          fontWeight: "semibold",
          color: "gray.800",
        })}
      >
        Base Stats
      </h3>

      {pokemon.stats.map((stat) => (
        <div
          key={stat.stat.name}
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "1",
          })}
        >
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              fontSize: "sm",
            })}
          >
            <span className={css({ textTransform: "capitalize" })}>
              {stat.stat.name.replace("-", " ")}
            </span>
            <span className={css({ fontWeight: "semibold" })}>
              {stat.base_stat}
            </span>
          </div>

          <div
            className={css({
              height: "2",
              bg: "gray.200",
              rounded: "full",
              overflow: "hidden",
            })}
          >
            <div
              className={css({
                height: "full",
                bg: "blue.700",
                rounded: "full",
                transition: "width 0.3s ease",
              })}
              style={{
                width: `${(stat.base_stat / 255) * 100}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
