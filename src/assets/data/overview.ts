import stockChartOverview from "./chart";

import type { Stock } from "./stocks";

export const overviewData: Stock[] = [
  {
    symbol: "DJIA",
    name: "Dow Jones",
    fullName: "Dow Jones Industrial Average",
    currentPrice: 25585.69,
    percentageChange: 0.38,
    trend: "down",
    category: "overview",
    chartData: stockChartOverview.DJIA,
  },
  {
    symbol: "NASDAQ",
    name: "NASDAQ",
    fullName: "NASDAQ",
    currentPrice: 6648.0,
    percentageChange: 4.22,
    trend: "up",
    category: "overview",
    chartData: stockChartOverview.META,
  },
  {
    symbol: "S&P",
    name: "S&P 500",
    fullName: "S&P 500",
    currentPrice: 2862.06,
    percentageChange: 13.49,
    trend: "up",
    category: "overview",
    chartData: stockChartOverview.BAC,
  },
  {
    symbol: "R2K",
    name: "Russ 2k",
    fullName: "Russ 2k",
    currentPrice: 1514.22,
    percentageChange: 1.01,
    trend: "down",
    category: "overview",
    chartData: stockChartOverview.AMZN,
  },
];
