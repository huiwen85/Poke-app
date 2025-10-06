import { css } from "../../styled-system/css";
import { forwardRef, type ElementType } from "react";

interface TextProps {
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "neutral" | "primary" | "secondary";
  weight?: "light" | "normal" | "bold";
  truncate?: boolean;
  uppercase?: boolean;
  italic?: boolean;
  underline?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as = "p",
      size = "md",
      color = "primary",
      weight = "bold",
      truncate = false,
      uppercase = false,
      italic = false,
      underline = false,
      children,
      ...rest
    },
    ref,
  ) => {
    const Component = as || "p";

    return (
      <Component
        ref={ref}
        className={css({
          fontSize: size,
          color: color,
          fontWeight: weight,
          textTransform: uppercase ? "uppercase" : undefined,
          fontStyle: italic ? "italic" : undefined,
          textDecoration: underline ? "underline" : undefined,
          whiteSpace: truncate ? "nowrap" : undefined,
          overflow: truncate ? "hidden" : undefined,
          textOverflow: truncate ? "ellipsis" : undefined,
        })}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = "Text";
