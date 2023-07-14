import { cn } from "@/utils/tw";

export type IconProps = {
  className?: string;
};

const TriangleIcon = ({ className }: IconProps) => {
  return (
    <svg className={cn("h-6 fill-primary", className)} role="img" viewBox="0 0 74 64">
      <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"></path>
    </svg>
  );
};

export default TriangleIcon;
