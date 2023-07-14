import OverviewCard from "@/components/overview-card";

import { overviewData } from "@/assets/data/overview";
import ThemeToggle from "@/components/theme-toggle";

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
            key={overview.title}
            title={overview.title}
            currentPrice={overview.currentPrice}
            percentageChange={overview.percentageChange}
            trend={overview.trend}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
