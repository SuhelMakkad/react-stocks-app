import { Link } from "react-router-dom";

import OverviewCard from "@/components/overview-card";
import ThemeToggle from "@/components/theme-toggle";
import StocksListTable from "@/components/stocks-list-table";

import { Stock, stocks } from "@/assets/data/stocks";

const overStocks = stocks.filter((stock) => stock.category === "overview");

const Dashboard = () => {
  return (
    <div className="container mx-auto pt-4">
      <div className="flex justify-between items-center gap-2 mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Markets</h1>
        <span className="text-muted-foreground">
          <ThemeToggle />
        </span>
      </div>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">
          Quick Overview of the Market
        </h3>
        <div className="flex md:grid gap-2 md:gap-4 grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-auto hide-scroll -mx-3 md:mx-0 px-3 md:px-0">
          {overStocks.map((overview) => (
            <Link key={overview.symbol} to={`/stock/${overview.symbol}`}>
              <OverviewCard
                title={overview.name}
                currentPrice={overview.currentPrice}
                percentageChange={overview.percentageChange}
                trend={overview.trend}
              />
            </Link>
          ))}
        </div>
      </section>

      <StocksTableSection />
    </div>
  );
};

import { useState, useEffect } from "react";
import { categories } from "@/assets/data/category";

const StocksTableSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>([]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredStocks(stocks);
      return;
    }

    setFilteredStocks(stocks.filter((stock) => stock.category === selectedCategory));
  }, [selectedCategory]);

  return (
    <section className="mt-12 mb-8 md:mt-16 space-y-3">
      <h3 className="text-sm font-semibold text-muted-foreground">Stocks Details</h3>

      <ul className="flex">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className="text-xs px-3 py-1.5 rounded-full aria-selected:bg-accent aria-selected:font-semibold"
              aria-selected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>

      <StocksListTable stocks={filteredStocks} />
    </section>
  );
};

export default Dashboard;
