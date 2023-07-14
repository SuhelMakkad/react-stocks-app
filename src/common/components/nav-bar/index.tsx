import Logo from "@/components/logo";
import NavList from "./nav-list";

import { navItemsGroups } from "./nav-items";

const Navbar = () => {
  return (
    <div className="bg-primary-foreground h-full px-2 py-5 flex flex-col gap-4">
      <Logo className="pl-4" />

      <NavList navItemsGroups={navItemsGroups} />
    </div>
  );
};

export default Navbar;
