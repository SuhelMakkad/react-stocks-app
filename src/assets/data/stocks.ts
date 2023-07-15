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
    name: "Amazon",
    fullName: "amazon.com",
    currentPrice: 25585.69,
    percentageChange: 0.38,
    trend: "down",
    category: "main-market",
    chartData: stockChartOverview.AMZN,
  },
  {
    symbol: "META",
    name: "Meta",
    fullName: "Meta Platforms Inc.",
    currentPrice: 6648.0,
    percentageChange: 4.22,
    trend: "up",
    category: "main-market",
    chartData: stockChartOverview.META,
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    fullName: "Microsoft Corp.",
    currentPrice: 2862.06,
    percentageChange: 13.49,
    trend: "up",
    category: "main-market",
    chartData: stockChartOverview.MSFT,
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    fullName: "Tesla, Inc.",
    currentPrice: 1514.22,
    percentageChange: 1.01,
    trend: "down",
    category: "main-market",
    chartData: stockChartOverview.TSLA,
  },
  {
    symbol: "GOOG",
    name: "Alphabet",
    fullName: "Alphabet Inc.",
    currentPrice: 1514.22,
    percentageChange: 10.1,
    trend: "up",
    category: "main-market",
    chartData: stockChartOverview.GOOG,
  },

  {
    symbol: "MS",
    name: "Morgan Stanley",
    fullName: "Morgan Stanley",
    currentPrice: 25585.69,
    percentageChange: 0.38,
    trend: "down",
    category: "junior-market",
    chartData: stockChartOverview.AMZN,
  },
  {
    symbol: "C",
    name: "Citigroup",
    fullName: "Citigroup Inc.",
    currentPrice: 1248.0,
    percentageChange: 2.22,
    trend: "down",
    category: "junior-market",
    chartData: stockChartOverview.C,
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase",
    fullName: "JPMorgan chase & co.",
    currentPrice: 764.06,
    percentageChange: 5.49,
    trend: "up",
    category: "junior-market",
    chartData: stockChartOverview.JPM,
  },
  {
    symbol: "BAC",
    name: "Bank of America",
    fullName: "Bank of America Corp.",
    currentPrice: 314.15,
    percentageChange: 9.26,
    trend: "up",
    category: "junior-market",
    chartData: stockChartOverview.BAC,
  },
  {
    symbol: "MA",
    name: "Mastercard",
    fullName: "Mastercard Inc.",
    currentPrice: 876.91,
    percentageChange: 3.1,
    trend: "down",
    category: "junior-market",
    chartData: stockChartOverview.MA,
  },
];
