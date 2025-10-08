import { NarrowConstrainedWrapper } from "@/app/components/layout/narrow-constraint-wrapper";
import PokemonsPagined from "../fragments/pokemonsPagined";
import { css } from "@/styled-system/css";

export default function PokemonsDesktopView({
  page,
}: Readonly<{ page: string }>) {
  return (
    <div className={css({ py: "4" })}>
      <h1
        className={css({
          fontSize: "2xl",
          color: "orange.500",
          textAlign: "center",
          fontWeight: "extrabold",
          pb: 4,
        })}
      >
        ALL Pokémon
      </h1>
      <NarrowConstrainedWrapper>
        <PokemonsPagined page={page} />;
      </NarrowConstrainedWrapper>
    </div>
  );
}
