import * as I from "lucide-react";
import { cn } from "@/utils/tw";

import type { NavItemsGroups } from "./nav-items";

export type NavListProps = {
  navItemsGroups: NavItemsGroups;
};

const NavList = ({ navItemsGroups }: NavListProps) => {
  return navItemsGroups.map((navItemsGroup) => (
    <div key={navItemsGroup.id} className={cn(navItemsGroup.id !== "menu" && "hidden md:block")}>
      {!!navItemsGroup.title && (
        <span className="text-sm font-medium text-muted-foreground mb-2 px-3 hidden md:block">
          {navItemsGroup.title}
        </span>
      )}
      <ul className="flex justify-center md:flex-col gap-2 overflow-auto hide-scroll">
        {navItemsGroup.items.map((navItems) => {
          const Icon = I[navItems.icon] as I.LucideIcon;
          return (
            <li key={navItems.href}>
              <a className="flex flex-col md:flex-row items-center gap-2 hover:bg-black/30 px-4 py-2 rounded hover:text-primary text-secondary-foreground transition-colors">
                <Icon className="w-8 h-8 md:text-white/80 md:w-5 md:h-5" />
                <span className="text-sm md:text-lg">{navItems.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  ));
};

export default NavList;
