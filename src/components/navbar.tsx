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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path
      ? "text-signature border-b border-signature"
      : "hover:text-signature";
  };
  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md transition-all duration-300 ease-in-out",
        !isVisible && "translate-y-[-100%]"
      )}
    >
      <Container className="h-16 flex items-center justify-between capitalize">
        <Brand />
        <div className="hidden md:flex items-center w-2/3 gap-8">
          <div className="flex items-center gap-8 text-muted-foreground w-2/3">
            {navMenu.map((item: MenuItem) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors flex items-center py-1",
                  isActive(item.href)
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between gap-8">
            <Link
              href="/sign-in"
              className={cn("transition-colors", isActive("/sign-in"))}
            >
              sign in
            </Link>
            <Button
              variant={"outline"}
              className="capitalize border-foreground rounded-full hover:bg-signature hover:border-signature"
            >
              <Link href="/sign-up">sign up</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <MenuSheet/>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
