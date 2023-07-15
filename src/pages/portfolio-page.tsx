import { usePortfolioStore } from "@/store/portfolio-store";

import ThemeToggle from "@/components/theme-toggle";
import StocksListTable from "@/components/stocks-list-table";

import { stocks } from "@/assets/data/stocks";

const getStocksFromSymbols = (symbols: string[]) => {
  if (!symbols) return [];

  return stocks.filter((s) => symbols.indexOf(s.symbol) !== -1);
};

const PortfolioPage = () => {
  const stockSymbols = usePortfolioStore((state) => state.symbols);
  const stocks = getStocksFromSymbols(stockSymbols);

  return (
    <div className="container mx-auto pt-4">
      <div className="flex justify-between items-center gap-2 mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Your Portfolio</h1>
        <span className="text-muted-foreground">
          <ThemeToggle />
        </span>
      </div>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">Stocks in your Portfolio</h3>
        <StocksListTable stocks={stocks} />
      </section>
    </div>
  );
};

export default PortfolioPage;
