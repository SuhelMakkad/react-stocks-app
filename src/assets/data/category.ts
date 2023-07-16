export const categories = [
  {
    id: "main-market",
    label: "Main Market",
  },
  {
    id: "junior-market",
    label: "Junior Market",
  },
  {
    id: "special-market",
    label: "Special Market",
  },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
