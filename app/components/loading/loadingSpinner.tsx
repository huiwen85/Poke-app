"use client";

import { css } from "@/styled-system/css";

export const LoadingSpinner = () => (
  <div
    className={css({
      position: "fixed",
      inset: 0,
      zIndex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      w: "full",
      h: "full",
      overflowX: "hidden",
      bg: { base: "blackAlpha.100", _dark: "blackAlpha.300" },
    })}
  >
    <div
      className={css({
        w: "12",
        h: "12",
        border: "4px solid",
        borderColor: "blue.500",
        borderTopColor: "transparent",
        borderRadius: "full",
        animation: "spin 0.8s linear infinite",
      })}
    />
  </div>
);
