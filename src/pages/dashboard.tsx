import OverviewCard from "@/components/overview-card";

import { overviewData } from "@/assets/data/overview";

const Dashboard = () => {
  return (
    <div className="container mx-auto pt-8">
      <div className="flex justify-between items-center gap-2 mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Markets</h1>
        <span className="text-muted-foreground">Quick overview of the market</span>
      </div>

      <div className="grid gap-2 md:gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {overviewData.map((overview) => (
          <OverviewCard
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
