import { ElementType } from '../../node_modules/react';
import { ForwardRefExoticComponent } from '../../node_modules/react';
import { JSX } from 'react/jsx-runtime';
import { JSX as JSX_2 } from '../../node_modules/react';
import { ReactNode } from '../../node_modules/react';
import { RefAttributes } from '../../node_modules/react';

export declare function Header({ title, navLinks, children, LinkComponent, }: HeaderProps): JSX.Element;

declare interface HeaderProps {
    title?: string;
    navLinks?: NavLink[];
    children?: React.ReactNode;
    LinkComponent?: React.ComponentType<{
        className: string;
        href: string;
        children: React.ReactNode;
    }>;
}

declare interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

declare interface Pokemon {
    id: number;
    name: string;
    url: string;
}

export declare function PokemonCard({ pokemon, href, className, LinkComponent, }: PokemonCardProps): JSX.Element;

declare interface PokemonCardProps {
    pokemon: Pokemon;
    href?: string;
    className?: string;
    LinkComponent?: (props: {
        href: string;
        children: ReactNode;
    }) => JSX_2.Element;
}

export declare const SearchBar: ({ placeholder, onSearch, className, }: SearchBarProps) => JSX.Element;

declare interface SearchBarProps {
    placeholder?: string;
    onSearch: (term: string) => void;
    className?: string;
}

declare const Text_2: ForwardRefExoticComponent<TextProps & RefAttributes<HTMLElement>>;
export { Text_2 as Text }

declare interface TextProps {
    as?: ElementType;
    size?: "sm" | "md" | "lg" | "xl";
    color?: string;
    weight?: "light" | "normal" | "bold";
    truncate?: boolean;
    uppercase?: boolean;
    italic?: boolean;
    underline?: boolean;
    children: React.ReactNode;
    className?: string;
}

export { }
