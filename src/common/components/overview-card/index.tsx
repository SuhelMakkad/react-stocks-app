import TrendChip from "@/components/trend-chip";
import type { Trend } from "@/assets/data/stocks";

import { formateAmount } from "@/utils/index";

export type OverviewCardProps = {
  title: string;
  currentPrice: number;
  percentageChange: number;
  trend: Trend;
};

const OverviewCard = ({ title, currentPrice, percentageChange, trend }: OverviewCardProps) => {
  return (
    <div className="shrink-0 min-w-[13rem] md:w-auto rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2">
      <h3 className="pb-2 tracking-tight text-muted-foreground text-sm font-medium uppercase">
        {title}
      </h3>

      <div className="flex items-center gap-3">
        <h4 className="text-xl font-bold">{formateAmount(currentPrice)}</h4>
        <TrendChip trend={trend} percentageChange={percentageChange} />
      </div>
    </div>
  );
};

export default OverviewCard;
