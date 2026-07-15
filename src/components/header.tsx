"use client";

import { useEffect, useState } from "react";
import { Hexagon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  key: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "#accueil", key: "accueil" },
  { href: "#presentation", key: "presentation" },
  { href: "#tarifs", key: "tarifs" },
  { href: "#avis", key: "avis" },
  { href: "#faq", key: "faq" },
];

const SCROLL_THRESHOLD = 32;

const NAV_LINK_CLASSES =
  "rounded-sm text-sm font-medium text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("header");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b",
        scrolled
          ? "border-border bg-background/80 backdrop-blur"
          : "border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-6xl items-center justify-between px-6",
          scrolled ? "py-2.5" : "py-7"
        )}
      >
        <div className="flex items-center gap-x-10">
          <a
            href="#accueil"
            onClick={(event) => handleNavClick(event, "#accueil")}
            className={cn(
              "flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
              !scrolled &&
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Hexagon
                className="size-5"
                fill="currentColor"
                strokeWidth={1}
                aria-hidden="true"
              />
            </span>
            <span className="text-base font-semibold tracking-tight text-foreground">
              {t("brand")}
            </span>
          </a>

          <nav aria-label={t("ariaNav")} className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={NAV_LINK_CLASSES}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          <Button type="button" variant="default" size="sm">
            {t("login")}
          </Button>
        </div>
      </div>
    </header>
  );
}
