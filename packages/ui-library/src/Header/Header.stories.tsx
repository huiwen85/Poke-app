import { Header } from "./Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  argTypes: {
    title: { control: "text" },
    navLinks: { control: "object" },
  },
  parameters: {
    docs: {
      description: {
        component: `
          The Header component renders a top navigation bar for the application.
          It displays a title, a set of navigation links, and optionally additional 
          children elements such as buttons or user actions.
          
          This component can be used for different layouts by providing or omitting \`children\`.
        `,
      },
    },
    argTypes: {
      title: {
        control: "text",
        description:
          "The main text displayed in the header, representing the application name or logo.",
      },
      navLinks: {
        control: "object",
        description:
          "An array of navigation links, each with a label, href, and optional isActive flag.",
      },
      children: {
        description:
          "Optional elements rendered on the right side of the header, e.g., buttons or user menu.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "PokeMonsters",
    navLinks: [
      { label: "Explore", href: "/", isActive: true },
      { label: "About", href: "/" },
      { label: "Contact", href: "/" },
    ],
    children: null,
  },
};

export const MultipleChildren: Story = {
  args: {
    title: "PokeMonsters",
    navLinks: [
      { label: "Explore", href: "/", isActive: true },
      { label: "About", href: "/" },
    ],
    children: (
      <div style={{ display: "flex", gap: 8 }}>
        <button>Login</button>
      </div>
    ),
  },
};

export const NoChildren: Story = {
  args: {
    title: "PokeMonsters",
    navLinks: [
      { label: "Explore", href: "/", isActive: true },
      { label: "About", href: "/" },
    ],
    children: null,
  },
};
