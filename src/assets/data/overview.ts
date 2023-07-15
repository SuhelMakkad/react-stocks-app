import { Stock } from "./stocks";

export const overviewData: Omit<Omit<Stock, "chartData">, "fullName">[] = [
  {
    symbol: "DJI",
    name: "djia",
    currentPrice: 25585.69,
    percentageChange: 0.38,
    trend: "down",
    category: "junior-market",
  },
  {
    symbol: "NDX",
    name: "nasdaq",
    currentPrice: 6648.0,
    percentageChange: 4.22,
    trend: "up",
    category: "junior-market",
  },
  {
    symbol: "SNP",
    name: "s&p 500",
    currentPrice: 2862.06,
    percentageChange: 13.49,
    trend: "up",
    category: "junior-market",
  },
  {
    symbol: "R2K",
    name: "russ 2k",
    currentPrice: 1514.22,
    percentageChange: 1.01,
    trend: "down",
    category: "junior-market",
  },
];
