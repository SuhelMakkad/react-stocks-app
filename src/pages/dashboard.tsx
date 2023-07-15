import OverviewCard from "@/components/overview-card";

import ThemeToggle from "@/components/theme-toggle";
import StocksListTable from "@/components/stocks-list-table";

import { overviewData } from "@/assets/data/overview";
import { stocks } from "@/assets/data/stocks";

const Dashboard = () => {
  return (
    <div className="container mx-auto pt-8">
      <div className="flex justify-between items-center gap-2 mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Markets</h1>
        <span className="text-muted-foreground">
          <ThemeToggle />
        </span>
      </div>

      <div className="flex md:grid gap-2 md:gap-4 grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-auto hide-scroll">
        {overviewData.map((overview) => (
          <OverviewCard
            key={overview.symbol}
            title={overview.name}
            currentPrice={overview.currentPrice}
            percentageChange={overview.percentageChange}
            trend={overview.trend}
          />
        ))}
      </div>

      <div className="mt-16">
        <StocksListTable stocks={stocks} />
      </div>
    </div>
  );
};

export default Dashboard;
