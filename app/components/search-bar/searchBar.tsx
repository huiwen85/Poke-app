"use client";
import { css } from "@/styled-system/css";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;

    const term = input.value.trim().toLowerCase();
    if (!term) return;

    router.push(`pokemon/${term}`);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className={css({ display: "flex", alignItems: "center" })}
    >
      <div
        className={css({
          display: "flex",
          h: 12,
          alignItems: "center",
          borderBottomWidth: "1px",
          borderBottomColor: "gray.400",
        })}
      >
        <input
          name="search"
          type="search"
          placeholder="Search"
          className={css({
            w: "full",
            rounded: "md",
            bg: { base: "white", _dark: "white/5" },
            py: 1.5,
            pl: 10,
            pr: 3,
            fontSize: "base",
            color: { base: "gray.900", _dark: "white" },
            outline: 1,
            outlineOffset: -1,
            outlineColor: "orange.500",
            _focus: {
              outline: 2,
              outlineOffset: -2,
              outlineColor: "orange.500",
              _dark: { outlineColor: "orange.500" },
            },
            _placeholder: {
              color: { base: "gray.400", _dark: "gray.500" },
            },
          })}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MagnifyingGlassIcon
          aria-hidden="true"
          className={css({
            w: 6,
            h: 6,
            pointerEvents: "none",
            alignSelf: "center",
            color: "gray.400",
          })}
        />
      </div>
    </form>
  );
}
