import { css } from "@/styled-system/css";

export default function LoadingSpinner() {
  return (
    <div
      className={css({
        position: "fixed",
        zIndex: 10,
        top: 0,
        left: 0,
        bg: "black",
        w: "100vw",
        h: "100vh",
        opacity: 0.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          animation: "spin 1s linear infinite",
          borderRadius: "full",
          h: "3rem",
          w: "3rem",
          borderBottomWidth: "2px",
          borderRightWidth: "2px",
          borderColor: "white",
          borderStyle: "solid",
        })}
      ></div>
    </div>
  );
}
