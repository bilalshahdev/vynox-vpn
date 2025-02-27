"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { navMenu } from "@/constants/data";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import for accessibility

const MenuSheet = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-signature font-semibold"
      : "text-muted-foreground hover:text-signature";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>

      <SheetContent side="right" className="w-64 flex flex-col justify-between">
        <VisuallyHidden>
          <SheetTitle>Menu</SheetTitle>
        </VisuallyHidden>
        <VisuallyHidden>
          <SheetDescription>Menu</SheetDescription>
        </VisuallyHidden>


        {/* Navigation Links */}
        <div className="flex flex-col gap-6 mt-6 capitalize">
          {navMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("transition-all text-lg", isActive(item.href))}
              onClick={() => setOpen(false)} // Close sheet on click
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Sign In & Sign Up Buttons (Placed at the Bottom) */}
        <div className="flex flex-col gap-4 mb-6">
          <Link
            href="/sign-in"
            className={cn("transition-all text-lg", isActive("/sign-in"))}
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
          <Button
            variant="outline"
            className="capitalize border-foreground rounded-full hover:bg-signature hover:border-signature"
            onClick={() => setOpen(false)}
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
