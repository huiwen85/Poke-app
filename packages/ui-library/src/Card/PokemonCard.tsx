import type { Pokemon } from "../types/pokemon";
import { css } from "../../styled-system/css";
import type { JSX, ReactNode } from "react";

interface PokemonCardProps {
  pokemon: Pokemon;
  href?: string;
  className?: string;
  LinkComponent?: (props: { href: string; children: ReactNode }) => JSX.Element;
}

export function PokemonCard({
  pokemon,
  href,
  className,
  LinkComponent,
}: PokemonCardProps) {
  const cardContent = (
    <div
      className={
        css({
          boxShadow: "md",
          borderRadius: "md",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bg: "neutral.100",
        }) + (className ? ` ${className}` : "")
      }
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
          <h2 className={css({ fontSize: "xl" })}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <p>{`#${pokemon.id}`}</p>
        </div>
      </div>
    </div>
  );

  if (href && LinkComponent) {
    return <LinkComponent href={href}>{cardContent}</LinkComponent>;
  }

  return cardContent;
}
