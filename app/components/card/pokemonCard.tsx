import { Pokemon } from "@/app/types/pokemon";
import { css } from "@/styled-system/css";
import Link from "next/link";
import { Text } from "pokeapi-ui";

export default function PokemonCard({pokemon}: Readonly<{pokemon: Pokemon}>){
    return(
        <Link key={pokemon.id} href={`/pokemon/${pokemon.name}/`}>
              <li
                className={css({
                  borderWidth: "1px",
                  borderRadius: "md",
                  pt: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                })}
              >
                <div className={css({flex: 1})}>
                    <img src={pokemon.url} alt={pokemon.name} />
                </div>
                <div className={css({ w: 'full', bg:'orange.100', p:2})}>
                    <div className={css({w: 'full', display:'flex', justifyContent:'space-between'})}>
                        <Text as={'p'} className={css({fontSize:'lg'})}> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
                        <p>{`#${pokemon.id}`}</p>
                    </div>
                </div>
              </li>
            </Link>
    )
}