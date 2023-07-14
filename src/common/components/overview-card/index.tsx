import { formateAmount } from "@/utils/index";
import { cn } from "@/utils/tw";

export type OverviewCardProps = {
  title: string;
  currentPrice: number;
  percentageChange: number;
  trend: "up" | "down";
};

const OverviewCard = ({ title, currentPrice, percentageChange, trend }: OverviewCardProps) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2">
      <h3 className="pb-2 tracking-tight text-muted-foreground text-sm font-medium uppercase">
        {title}
      </h3>

      <div className="flex items-center gap-3">
        <h4 className="text-xl font-bold">{formateAmount(currentPrice)}</h4>
        <span
          className={cn(
            "hidden md:block text-xs font-semibold px-2 py-px rounded-full",
            trend === "up" ? "bg-green-100 text-green-950" : "bg-red-100 text-red-950"
          )}
        >
          {trend === "up" ? "+" : "-"}
          {percentageChange}%
        </span>
      </div>
    </div>
  );
};

export default OverviewCard;
