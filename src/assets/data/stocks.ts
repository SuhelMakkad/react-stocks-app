import stockChartOverview from "./chart";
import type { ChartData } from "./chart";

export type Trend = "up" | "down";

export type Stock = {
  symbol: string;
  name: string;
  fullName: string;
  currentPrice: number;
  percentageChange: number;
  trend: Trend;
  category: string;
  chartData: ChartData;
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
    chartData: stockChartOverview.AMZN,
  },
  {
    symbol: "META",
    name: "meta",
    fullName: "meta platforms inc.",
    currentPrice: 6648.0,
    percentageChange: 4.22,
    trend: "up",
    category: "junior market",
    chartData: stockChartOverview.META,
  },
  {
    symbol: "MSFT",
    name: "microsoft",
    fullName: "Microsoft corp.",
    currentPrice: 2862.06,
    percentageChange: 13.49,
    trend: "up",
    category: "junior market",
    chartData: stockChartOverview.MSFT,
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    fullName: "tesla, inc.",
    currentPrice: 1514.22,
    percentageChange: 1.01,
    trend: "down",
    category: "junior market",
    chartData: stockChartOverview.TSLA,
  },
  {
    symbol: "GOOG",
    name: "alphabet",
    fullName: "alphabet inc.",
    currentPrice: 1514.22,
    percentageChange: 10.1,
    trend: "up",
    category: "junior market",
    chartData: stockChartOverview.GOOG,
  },
];
