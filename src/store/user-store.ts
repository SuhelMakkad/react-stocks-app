import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  profileImage?: string | null;
  username: string;
  email: string;
  bio: string;
};

export type UserStoreState = {
  setDetails: (user: User) => void;
} & User;

export const useUserStore = create(
  persist<UserStoreState>(
    (set) => ({
      username: "Rick Sanchez",
      email: "",
      bio: "",
      profileImage: "/profile-pic.jpeg",
      setDetails: (newUserDetails) => set(newUserDetails),
    }),
    {
      name: "user-details",
    }
  )
);
