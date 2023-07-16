import { CategoryId } from "./category";
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
  category: CategoryId | "overview";
  chartData: ChartData;
};

export type GroupedStocks = Record<Stock["category"], Stock[]>;

export const stocks: Stock[] = [
  // main market stocks
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

  // junior market stocks
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

  // fx rates
  {
    symbol: "NVDA",
    name: "NVIDIA",
    fullName: "NVIDIA Corp",
    currentPrice: 471.24,
    percentageChange: 8.31,
    trend: "up",
    category: "special-market",
    chartData: stockChartOverview.NVDA,
  },
  {
    symbol: "INTC",
    name: "Intel",
    fullName: "Intel Corp.",
    currentPrice: 497.01,
    percentageChange: 2.22,
    trend: "down",
    category: "special-market",
    chartData: stockChartOverview.INTC,
  },
  {
    symbol: "AMD",
    name: "Advanced Micro Devices",
    fullName: "Advanced Micro Devices, Inc.",
    currentPrice: 597.16,
    percentageChange: 5.49,
    trend: "up",
    category: "special-market",
    chartData: stockChartOverview.AMD,
  },
  {
    symbol: "QCOM",
    name: "Qualcomm",
    fullName: "Qualcomm Inc.",
    currentPrice: 971.44,
    percentageChange: 9.26,
    trend: "up",
    category: "special-market",
    chartData: stockChartOverview.QCOM,
  },
  {
    symbol: "MDTKF",
    name: "MediaTek",
    fullName: "MediaTek Inc.",
    currentPrice: 264.11,
    percentageChange: 3.1,
    trend: "down",
    category: "special-market",
    chartData: stockChartOverview.MDTKF,
  },

  // overview stocks
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

export const getGroupedStocks = () => {
  const groups = {} as GroupedStocks;

  stocks.forEach((stock) => {
    if (!groups[stock.category]) {
      groups[stock.category] = [];
    }
    groups[stock.category].push(stock);
  });

  return groups;
};
