import type { Trend } from "@/assets/data/stocks";
import { cn } from "@/utils/tw";

export type TrendChipProps = {
  className?: string;
  trend: Trend;
  percentageChange: string | number;
};

const TrendChip = ({ trend, percentageChange, className }: TrendChipProps) => {
  return (
    <span
      className={cn(
        "text-xs font-semibold px-2 py-px rounded-full",
        trend === "up" ? "bg-green-100 text-green-950" : "bg-red-100 text-red-950",
        className
      )}
    >
      {trend === "up" ? "+" : "-"}
      {percentageChange}%
    </span>
  );
};

export default TrendChip;
