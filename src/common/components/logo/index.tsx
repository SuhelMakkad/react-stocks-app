import { cn } from "@/utils/tw";
import TriangleIcon from "./triangle-icon";

export type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex gap-2 text-xl items-center", className)} aria-describedby="Logo">
      <TriangleIcon className="h-5" />
      <span className="font-medium">Stocks App</span>
    </div>
  );
};

export default Logo;
