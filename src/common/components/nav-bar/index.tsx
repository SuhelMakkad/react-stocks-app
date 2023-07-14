import Logo from "@/components/logo";
import UserProfile from "@/components/user-profile";
import NavList from "./nav-list";

import { navItemsGroups } from "./nav-items";

const name = "Rick Sanchez";
const profileImg = "https://github.com/shadcn.png";

const Navbar = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-950 h-full px-2 py-5 flex flex-col gap-4">
      <Logo className="pl-4 hidden md:flex" />

      <NavList navItemsGroups={navItemsGroups} />

      <UserProfile className="mt-auto pl-4 hidden md:flex" profileImg={profileImg} name={name} />
    </div>
  );
};

export default Navbar;
