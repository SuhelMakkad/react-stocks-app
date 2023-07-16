import { Loader2 } from "lucide-react";

const LoadingIndicator = () => {
  return (
    <div className="grid place-content-center h-full">
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
};

export default LoadingIndicator;
