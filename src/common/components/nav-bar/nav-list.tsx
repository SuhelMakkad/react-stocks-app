import * as I from "lucide-react";
import { cn } from "@/utils/tw";

import type { NavItemsGroups } from "./nav-items";
import { Link } from "react-router-dom";

export type NavListProps = {
  navItemsGroups: NavItemsGroups;
};

const NavList = ({ navItemsGroups }: NavListProps) => {
  return navItemsGroups.map((navItemsGroup) => (
    <div key={navItemsGroup.id} className={cn(navItemsGroup.id !== "menu" && "hidden lg:block")}>
      {!!navItemsGroup.title && (
        <span className="text-sm font-medium text-muted-foreground mb-2 px-3 hidden lg:block">
          {navItemsGroup.title}
        </span>
      )}

      <ul className="flex justify-center lg:flex-col gap-2 overflow-auto hide-scroll">
        {navItemsGroup.items.map((navItems) => {
          const Icon = I[navItems.icon] as I.LucideIcon;
          return (
            <li key={navItems.href}>
              <Link
                to={navItems.href}
                className="flex flex-col lg:flex-row items-center gap-2 hover:bg-primary/20 px-4 py-2 rounded hover:text-primary text-secondary-foreground transition-colors"
              >
                <Icon className="w-8 h-8 lg:text-primary/80 lg:w-5 lg:h-5" />
                <span className="text-sm lg:text-lg">{navItems.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ));
};

export default NavList;
