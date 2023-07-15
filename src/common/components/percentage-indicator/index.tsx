import type { Trend } from "@/assets/data/stocks";

import { cn } from "@/utils/tw";

export type PercentageIndicatorProps = {
  trend: Trend;
  percentage: number;
  className?: string;
};

const PercentageIndicator = ({ trend, percentage, className }: PercentageIndicatorProps) => {
  return (
    <div
      className={cn(
        trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
        "w-24 h-24 rounded-full flex justify-center items-center gap-px text-3xl shrink-0 font-semibold",
        className
      )}
    >
      {percentage.toFixed()}

      <span className="text-sm">%</span>
    </div>
  );
};

export default PercentageIndicator;
