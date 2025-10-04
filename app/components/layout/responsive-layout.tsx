"use client";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  initialScreenSize: "small" | "medium" | "large";
  mobileView: ReactNode;
  desktopView: ReactNode;
}

export default function ResponsiveLayout({
  initialScreenSize,
  mobileView,
  desktopView,
}: Props) {
  const [screenSize, setScreenSize] = useState(initialScreenSize);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenSize("small");
      else if (width < 1024) setScreenSize("medium");
      else setScreenSize("large");
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      {screenSize === "small" && mobileView}
      {screenSize === "medium" && desktopView}
      {screenSize === "large" && desktopView}
    </>
  );
}
