"use client";

import { TypographyP } from "@/components/typography/typography-p";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
export function Navbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="h-min w-min rounded border p-1">
          <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetTitle>Menu</SheetTitle>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <TypographyP>Home</TypographyP>
            </NavigationMenuItem>
            <NavigationMenuItem></NavigationMenuItem>
            <NavigationMenuItem></NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}
