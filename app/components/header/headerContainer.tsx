"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Header, SearchBar } from "pokeapi-ui";
import { useCallback, useMemo } from "react";

export default function headerContainer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = useCallback((term: string) => {
    router.push(`pokemon/${term}`);
  }, []);

  const navLinks = [
    { label: "Explore", href: "/" },
    { label: "All Pokémon", href: "/pokemons/1" },
  ].map((link) => {
    if (link.href === "/") {
      return { ...link, isActive: pathname === "/" };
    } else if (link.href.startsWith("/pokemons")) {
      return { ...link, isActive: pathname.startsWith("/pokemons") };
    }
    return { ...link, isActive: false };
  });

  return (
    <Header LinkComponent={Link} navLinks={navLinks}>
      <SearchBar onSearch={handleSearch} placeholder="Search..." />
    </Header>
  );
}
