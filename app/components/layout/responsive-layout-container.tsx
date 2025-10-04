"use server";

import { ReactNode } from "react";
import { headers } from "next/headers";
import ResponsiveLayout from "./responsive-layout";

interface Props {
  mobileView: ReactNode;
  desktopView: ReactNode;
}

export default async function ResponsiveLayoutContainer({
  mobileView,
  desktopView,
}: Props) {
  const userAgent = (await headers()).get("user-agent") || "";
  const isMobile = /Mobile|Android|iPhone|iPad/.test(userAgent);

  const initialScreenSize = isMobile ? "small" : "large";

  return (
    <ResponsiveLayout
      initialScreenSize={initialScreenSize}
      mobileView={mobileView}
      desktopView={desktopView}
    />
  );
}
