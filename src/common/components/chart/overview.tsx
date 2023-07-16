import type { ChartData } from "@/assets/data/chart";
import type { Trend } from "@/assets/data/stocks";

import { cn } from "@/utils/tw";

import { LineChart, Line, ResponsiveContainer } from "recharts";

export type OverviewChartProps = {
  chartData: ChartData;
  trend: Trend;
};

const OverviewChart = ({ chartData, trend }: OverviewChartProps) => {
  return (
    <ResponsiveContainer height={30}>
      <LineChart data={chartData} className="pointer-events-none select-none">
        <Line
          type="monotone"
          dataKey="val"
          keyTimes={"time"}
          dot={false}
          stroke="currentColor"
          className={cn(
            trend === "up" ? "dark:text-green-200 text-green-500" : "dark:text-red-200 text-red-500"
          )}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
