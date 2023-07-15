import type { ChartData } from "@/assets/data/chart";
import type { Trend } from "@/assets/data/stocks";

import { cn } from "@/utils/tw";

import { LineChart, Line, ResponsiveContainer } from "recharts";

export type DetailedChartProps = {
  chartData: ChartData;
  trend: Trend;
};

const DetailedChart = ({ chartData, trend }: DetailedChartProps) => {
  return (
    <ResponsiveContainer height={400}>
      <LineChart data={chartData}>
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

export default DetailedChart;
