import { useState, useCallback } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { css } from "../../styled-system/css";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (term: string) => void;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Search",
  onSearch,
  className,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const term = searchTerm.trim();
      if (!term) return;
      onSearch(term);
    },
    [searchTerm, onSearch],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`${css({ display: "flex", alignItems: "center" })} ${
        className || ""
      }`}
    >
      <div
        className={css({
          display: "flex",
          h: 12,
          alignItems: "center",
          borderBottomWidth: "1px",
          borderBottomColor: "gray.400",
          position: "relative",
          w: "full",
        })}
      >
        <MagnifyingGlassIcon
          aria-hidden="true"
          className={css({
            w: 6,
            h: 6,
            pointerEvents: "none",
            position: "absolute",
            left: 3,
            color: "gray.400",
          })}
        />
        <input
          name="search"
          type="search"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
        />
      </div>
    </form>
  );
};
