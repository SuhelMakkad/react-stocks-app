import { Settings, CandlestickChart, Newspaper, PieChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItemsGroups = {
  id: string;
  title?: string;
  items: {
    label: string;
    href: string;
    icon: LucideIcon;
  }[];
}[];

export const navItemsGroups: NavItemsGroups = [
  {
    id: "profile",
    items: [
      {
        label: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
  {
    id: "menu",
    title: "Menu",
    items: [
      {
        label: "Market",
        href: "/",
        icon: CandlestickChart,
      },
      {
        label: "News",
        href: "/news",
        icon: Newspaper,
      },
      {
        label: "Portfolio",
        href: "/portfolio",
        icon: PieChart,
      },
    ],
  },
];
