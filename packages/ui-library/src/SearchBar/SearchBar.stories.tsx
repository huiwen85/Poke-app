import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    onSearch: { action: "searched" },
  },
  parameters: {
    docs: {
      description: {
        component: `
          The SearchBar component provides an input field for users to enter search terms.
          It supports a customizable placeholder and triggers a callback function when
          the user submits a search. Ideal for filtering lists or navigating content
          in your application.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: "Search something...",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Find your Pokemon",
  },
};

export const WithSearchAction: Story = {
  args: {
    placeholder: "Type and press Enter",
    onSearch: (term: string) => {
      console.log("Search term:", term);
    },
  },
};
