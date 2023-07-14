import OverviewCard from "@/components/overview-card";

const Dashboard = () => {
  return (
    <div className="container mx-auto pt-8">
      <div className="flex justify-between items-center gap-2 mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Markets</h1>
        <span className="text-muted-foreground">Quick overview of the market</span>
      </div>

      <div className="grid gap-2 md:gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <OverviewCard title="NASDAQ" value="$45,231.89" percentage={10} type="up" />
        <OverviewCard title="NASDAQ" value="$45,231.89" percentage={10} type="down" />
        <OverviewCard title="NASDAQ" value="$45,231.89" percentage={10} type="down" />
        <OverviewCard title="NASDAQ" value="$45,231.89" percentage={10} type="down" />
      </div>
    </div>
  );
};

export default Dashboard;
