import { Link, useLocation } from "react-router-dom";

import * as I from "lucide-react";
import type { NavItemsGroups } from "./nav-items";

export type NavListProps = {
  navItemsGroups: NavItemsGroups;
};

const NavList = ({ navItemsGroups }: NavListProps) => {
  const location = useLocation();

  return (
    <div className="flex justify-center lg:flex-col">
      {navItemsGroups.map((navItemsGroup) => (
        <div key={navItemsGroup.id}>
          {!!navItemsGroup.title && (
            <span className="text-sm font-medium text-muted-foreground mb-2 px-3 hidden lg:block">
              {navItemsGroup.title}
            </span>
          )}

          <ul className="flex justify-center lg:flex-col gap-2 overflow-auto hide-scroll">
            {navItemsGroup.items.map((navItems) => (
              <li key={navItems.href}>
                <Link
                  to={navItems.href}
                  aria-selected={location.pathname === navItems.href}
                  className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2 hover:bg-primary/20 px-4 py-1.5 lg:py-2 rounded hover:text-primary text-secondary-foreground transition-colors aria-selected:bg-primary/10"
                >
                  <navItems.icon className="w-8 h-8 lg:text-primary/80 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-lg">{navItems.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavList;
