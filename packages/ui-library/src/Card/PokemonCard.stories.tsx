import type { Meta, StoryObj } from "@storybook/react";
import { PokemonCard } from "./PokemonCard";
import type { Pokemon } from "../types/pokemon";

const MockLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => <a href={href}>{children}</a>;

const samplePokemon: Pokemon = {
  id: 1,
  name: "bulbasaur",
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
};

const meta: Meta<typeof PokemonCard> = {
  title: "Components/PokemonCard",
  component: PokemonCard,
  parameters: {
    docs: {
      description: {
        component: `
          The PokemonCard component displays a Pokémon's image, name, and ID
          inside a styled card. Optionally, it can be wrapped with a Link
          component to make the card clickable.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PokemonCard>;

export const Default: Story = {
  args: {
    pokemon: samplePokemon,
    href: "/pokemon/bulbasaur",
    LinkComponent: MockLink,
  },
  parameters: {
    docs: {
      description: {
        component:
          "This component displays a Pokémon in a card with its image, name, and number",
      },
    },
  },
};

export const WithoutLink: Story = {
  args: {
    pokemon: samplePokemon,
  },
  parameters: {
    docs: {
      description: {
        story: "This variant shows the card without a link",
      },
    },
  },
};
