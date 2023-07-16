import { useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

import type { ChartData } from "@/assets/data/chart";
import type { Trend } from "@/assets/data/stocks";

import { cn } from "@/utils/tw";

export type DetailedChartProps = {
  chartData: ChartData;
  trend: Trend;
};

const timePeriods = [
  {
    label: "1D",
  },
  {
    label: "7D",
  },
  {
    label: "1M",
  },
  {
    label: "3M",
  },
  {
    label: "1Y",
  },
];

const DetailedChart = ({ chartData, trend }: DetailedChartProps) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("1M");
  return (
    <section>
      <ResponsiveContainer height={400}>
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="val"
            keyTimes={"time"}
            dot={false}
            stroke="currentColor"
            className={cn(
              trend === "up"
                ? "dark:text-green-200 text-green-500"
                : "dark:text-red-200 text-red-500"
            )}
          />
        </LineChart>
      </ResponsiveContainer>

      <ul className="flex gap-1 justify-between max-w-xs mx-auto">
        {timePeriods.map((timePeriod) => (
          <li key={timePeriod.label} onClick={() => setSelectedTimePeriod(timePeriod.label)}>
            <Button
              className="rounded-full w-12 p-0 leading-none"
              variant={timePeriod.label === selectedTimePeriod ? "default" : "ghost"}
            >
              {timePeriod.label}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DetailedChart;
