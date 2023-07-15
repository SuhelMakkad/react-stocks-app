import { useUserStore } from "@/store/user-store";

import Logo from "@/components/logo";
import UserProfile from "@/components/user-profile";
import NavList from "./nav-list";

import { navItemsGroups } from "./nav-items";

const Navbar = () => {
  const user = useUserStore();

  return (
    <div className="bg-slate-100 dark:bg-slate-950 h-full px-2 py-1 lg:py-5 flex flex-col gap-4">
      <Logo className="pl-4 hidden lg:flex" />

      <NavList navItemsGroups={navItemsGroups} />

      <UserProfile
        className="mt-auto pl-4 hidden lg:flex"
        profileImg={user.profileImage}
        name={user.username}
      />
    </div>
  );
};

export default Navbar;
