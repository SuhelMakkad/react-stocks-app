import { useParams, Link } from "react-router-dom";

import { ChevronLeftCircleIcon } from "lucide-react";

import ThemeToggle from "@/components/theme-toggle";
import TrendChip from "@/components/trend-chip";

import { formateAmount } from "@/utils/index";

import { stocks } from "@/assets/data/stocks";

const getStockDetails = (symbol: string) => {
  return stocks.find((stock) => stock.symbol?.toLowerCase() === symbol?.toLowerCase());
};

const StockDetailsPage = () => {
  const params = useParams();
  const stock = getStockDetails(params.symbol as string);

  if (!stock) {
    // TODO: add a 404 page
    return "404";
  }

  return (
    <div className="container mx-auto pt-4">
      <section className="flex justify-between items-center gap-2 mb-8">
        <div className="flex gap-2 items-center">
          <Link to={"/"} className="block lg:hidden">
            <ChevronLeftCircleIcon className="opacity-50 w-9 h-9" />
          </Link>
          <header className="leading-none">
            <h1 className="text-lg font-semibold tracking-tight">{stock.symbol}</h1>
            <span className="block text-muted-foreground capitalize">{stock.fullName}</span>
          </header>
        </div>

        <span className="text-muted-foreground">
          <ThemeToggle />
        </span>
      </section>

      <section className="space-y-2">
        <h3 className="text-3xl font-semibold">{formateAmount(stock.currentPrice)}</h3>
        <TrendChip
          className="inline-block"
          percentageChange={stock.percentageChange}
          trend={stock.trend}
        />
      </section>
    </div>
  );
};

export default StockDetailsPage;
