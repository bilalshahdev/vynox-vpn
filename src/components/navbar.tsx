"use client";

import { navMenu } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Brand from "./brand";
import Container from "./container";
import MenuSheet from "./menu-sheet";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string, border = true) => {
    return pathname === path || activeSection === path
      ? `text-signature ${border ? "border-b border-signature" : ""}`
      : "hover:text-signature";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY;
      const sections = navMenu
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      sections.forEach((section) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop - 50 &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const handleScrollToSection = (sectionId: string) => {
    setIsScrolling(true);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        setActiveSection(sectionId);
        setIsScrolling(false);
      }, 500);
    }
  };

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md transition-all duration-300 ease-in-out"
      )}
    >
      <Container className="h-16 flex items-center justify-between capitalize">
        <Brand />
        <div className="hidden md:flex items-center justify-between w-2/3 gap-8">
          <div className="flex items-center gap-8 text-muted-foreground w-2/3">
            {navMenu.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  item.id === "home"
                    ? window.scrollTo({ top: 0, behavior: "smooth" })
                    : handleScrollToSection(item.id)
                }
                className={cn(
                  "transition-colors flex items-center py-1 capitalize",
                  isActive(item.id)
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between gap-8">
            <Link
              href="#"
              className={cn("transition-colors", isActive("/sign-in"))}
            >
              sign in
            </Link>
            <Button
              variant={"outline"}
              className="capitalize border-foreground rounded-full hover:bg-signature hover:border-signature"
            >
              <Link href="#">sign up</Link>
            </Button>
            <ThemeToggle />
          </div>
          {/* <ThemeToggle /> */}
        </div>
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <MenuSheet
            handleScrollToSection={handleScrollToSection}
            activeSection={activeSection}
            isActive={isActive}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
