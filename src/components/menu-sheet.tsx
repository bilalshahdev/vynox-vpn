"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navMenu } from "@/constants/data";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import for accessibility
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const MenuSheet = ({
  handleScrollToSection,
  activeSection,
  isActive
}: {
  handleScrollToSection: (sectionId: string) => void;
  activeSection: string;
  isActive: (path: string, border?: boolean) => string;
}) => {
  const [open, setOpen] = useState(false);

  // <button
  // key={item.id}
  // onClick={() => handleScrollToSection(item.id)}
  // className={cn("transition-all text-lg hover:text-signature capitalize")}
  // >
  const handleClick = (id: string) => {
    handleScrollToSection(id);
    setOpen(false);
  };
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
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                "transition-all text-lg hover:text-signature capitalize", isActive(item.id, false)
              )}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Sign In & Sign Up Buttons (Placed at the Bottom) */}
        <div className="flex flex-col gap-4 mb-6">
          <Link
            href="/sign-in"
            className={cn("transition-all text-lg", isActive("/sign-in", false))}
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
