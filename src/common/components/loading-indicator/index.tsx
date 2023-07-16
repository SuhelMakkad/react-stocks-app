import { Loader2 } from "lucide-react";
import { cn } from "@/utils/tw";

export type LoadingIndicatorProps = {
  className?: string;
};

const LoadingIndicator = ({ className }: LoadingIndicatorProps) => {
  return (
    <div className={cn("grid place-content-center h-full min-h-[70vh]", className)}>
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
};

export default LoadingIndicator;
