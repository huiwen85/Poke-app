import { Disclosure } from "@headlessui/react";
import { Text } from "pokeapi-ui";
import { css } from "../../styled-system/css";

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}
interface HeaderProps {
  title?: string;
  navLinks?: NavLink[];
  children?: React.ReactNode;
  LinkComponent?: React.ComponentType<{
    className: string;
    href: string;
    children: React.ReactNode;
  }>;
}

export function Header({
  title = "PokeMonsters",
  navLinks = [{ label: "Explore", href: "/", isActive: true }],
  children,
  LinkComponent = ({ href, children, className, ...props }) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ),
}: HeaderProps) {
  const navContainerStyle = css({
    display: "none",
    ml: "6",
    flexDirection: "row",
    gap: "8",
    lg: { display: "flex", ml: "6", gap: "8" },
  });

  const navLink = css({
    display: "inline-flex",
    alignItems: "center",
    borderBottomWidth: "2px",
    px: "1",
    pt: "1",
    fontSize: "sm",
    fontWeight: "medium",
    color: "gray.500",
    borderColor: "transparent",
    _hover: { borderColor: "gray.300", color: "gray.700" },
    _dark: {
      color: "gray.400",
      _hover: { borderColor: "whiteAlpha.20", color: "white" },
    },
    outline: "none",
    _focus: { boxShadow: "0 0 0 3px orange.300" },
  });

  const navLinkActive = css({
    borderColor: "orange.500",
    color: "gray.900",
    _dark: { borderColor: "indigo.500", color: "white" },
  });

  return (
    <Disclosure
      as="nav"
      className={css({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        bg: "white",
        shadow: "sm",
        _dark: {
          bg: "gray.800/50",
          shadow: "none",
          _after: {
            pointerEvents: "none",
            position: "absolute",
            insetX: "0",
            bottom: "0",
            h: "1px",
            bg: "white/10",
            content: '""',
          },
        },
      })}
    >
      <div
        className={css({
          mx: "auto",
          maxW: "7xl",
          px: { base: "2", sm: "4", lg: "8" },
        })}
      >
        <div
          className={css({
            display: "flex",
            h: "16",
            justifyContent: "space-between",
          })}
        >
          <div className={css({ display: "flex", px: { base: "2", lg: "0" } })}>
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              })}
            >
              <Text as="p" weight="bold">
                {title}
              </Text>
            </div>
            <div className={navContainerStyle}>
              {navLinks.map((link) => (
                <LinkComponent
                  key={link.href}
                  href={link.href}
                  className={`${navLink} ${link.isActive ? navLinkActive : ""}`} // <-- clase aquí
                  aria-current={link.isActive ? "page" : undefined} // <-- opcional si tu LinkComponent acepta props de a11y
                >
                  {link.label} {/* ya no necesitas el span */}
                </LinkComponent>
              ))}
            </div>
          </div>
          {children}
        </div>
      </div>
    </Disclosure>
  );
}
