import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["p", "div", "span", "h1", "h2", "h3"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg", "xl"],
    },
    color: {
      control: { type: "text" },
      description:
        "Puedes usar tokens del tema o cualquier color CSS válido (hex, rgb, etc.)",
    },
    weight: {
      control: { type: "radio" },
      options: ["light", "normal", "bold"],
    },
    truncate: { control: "boolean" },
    uppercase: { control: "boolean" },
    italic: { control: "boolean" },
    underline: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Hello, I am default text!",
    as: "p",
    size: "xl",
    color: "red",
    weight: "bold",
    truncate: false,
    uppercase: false,
    italic: false,
    underline: false,
  },
};

export const Heading: Story = {
  args: {
    children: "I am an h1",
    as: "h1",
    size: "xl",
    weight: "bold",
    uppercase: true,
    underline: true,
    color: "red",
  },
};

export const Truncated: Story = {
  args: {
    children:
      "This text is very long and will be truncated with ellipsis at the end",
    truncate: true,
    size: "md",
    color: "neutral.600",
  },
};

export const StyledText: Story = {
  args: {
    children: "Text with combined styles",
    size: "sm",
    color: "orange.500",
    weight: "light",
    uppercase: true,
    italic: true,
    underline: true,
  },
};

export const AsDiv: Story = {
  args: {
    children: "I am a div using the 'as' prop",
    as: "div",
    size: "md",
    color: "sky.600",
  },
};
