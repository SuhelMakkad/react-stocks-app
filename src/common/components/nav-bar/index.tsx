import { cn } from "@/utils/tw";
import { navItemsGroups } from "./nav-items";
import * as I from "lucide-react";
import Logo from "../logo";

const Navbar = () => {
  return (
    <div className="bg-primary-foreground h-full px-2 py-5 flex flex-col gap-4">
      <Logo className="pl-4" />

      {navItemsGroups.map((navItemsGroup) => (
        <div
          key={navItemsGroup.id}
          className={cn(navItemsGroup.id !== "menu" && "hidden md:block")}
        >
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
      ))}
    </div>
  );
};

export default Navbar;
