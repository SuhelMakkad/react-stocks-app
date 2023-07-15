import { cn } from "@/utils/tw";

export type ProgressWithLabelProps = {
  label: string;
  percentage: number;
  type?: "green" | "red";
};

const ProgressWithLabel = ({ label, percentage, type }: ProgressWithLabelProps) => {
  return (
    <div className="flex items-center gap-4 w-full capitalize">
      <span className="w-7">{label}</span>
      <div
        className={cn(
          type ? (type === "green" ? "bg-green-300" : "bg-red-300") : "bg-secondary",
          "h-2 rounded"
        )}
        style={{ width: `${percentage}%` }}
      ></div>
      <span className="whitespace-nowrap">{percentage} %</span>
    </div>
  );
};

export default ProgressWithLabel;
