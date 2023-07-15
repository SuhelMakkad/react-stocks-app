import { cn } from "@/utils/tw";
import React from "react";

export type Trend = "up" | "down";

export type TrendChipProps = {
  trend: Trend;
  percentageChange: string | number;
};

const TrendChip = ({ trend, percentageChange }: TrendChipProps) => {
  return (
    <span
      className={cn(
        "text-xs font-semibold px-2 py-px rounded-full",
        trend === "up" ? "bg-green-100 text-green-950" : "bg-red-100 text-red-950"
      )}
    >
      {trend === "up" ? "+" : "-"}
      {percentageChange}%
    </span>
  );
};

export default TrendChip;
