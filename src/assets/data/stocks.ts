export type Trend = "up" | "down";

export type Stock = {
  symbol: string;
  name: string;
  fullName: string;
  currentPrice: number;
  percentageChange: number;
  trend: Trend;
  category: string;
};

export const stocks: Stock[] = [
  {
    symbol: "AMZN",
    name: "amazon",
    fullName: "amazon.com",
    currentPrice: 25585.69,
    percentageChange: 0.38,
    trend: "down",
    category: "junior market",
  },
  {
    symbol: "META",
    name: "meta",
    fullName: "meta platforms inc.",
    currentPrice: 6648.0,
    percentageChange: 4.22,
    trend: "up",
    category: "junior market",
  },
  {
    symbol: "MSFT",
    name: "microsoft",
    fullName: "Microsoft corporation",
    currentPrice: 2862.06,
    percentageChange: 13.49,
    trend: "up",
    category: "junior market",
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    fullName: "tesla, inc.",
    currentPrice: 1514.22,
    percentageChange: 1.01,
    trend: "down",
    category: "junior market",
  },
  {
    symbol: "GOOG",
    name: "alphabet inc.",
    fullName: "alphabet inc.",
    currentPrice: 1514.22,
    percentageChange: 1.01,
    trend: "down",
    category: "junior market",
  },
];
