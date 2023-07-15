import type { ChartData } from "@/assets/data/chart-overview";
import type { Trend } from "@/assets/data/stocks";
import { cn } from "@/utils/tw";

import { LineChart, Line } from "recharts";

export type OverviewChartProps = {
  chartData: ChartData;
  trend: Trend;
};

const OverviewChart = ({ chartData, trend }: OverviewChartProps) => {
  return (
    <LineChart width={60} height={30} data={chartData}>
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
  );
};

export default OverviewChart;
