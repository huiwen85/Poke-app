import { css } from "@/styled-system/css";
import { PropsWithChildren } from "react";

export function NarrowConstrainedWrapper({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) {
  const outer = css({
    mx: "auto", // margin-left & margin-right auto
    w: "full", // width: 100%
    h: "full", // height: 100%
  });

  const inner = css({
    mx: "auto",
    h: "full",
    maxW: "screen-xl",
    px: 4,
  });

  return (
    <div className={`${outer} ${className ?? ""}`}>
      <div className={inner}>{children}</div>
    </div>
  );
}
