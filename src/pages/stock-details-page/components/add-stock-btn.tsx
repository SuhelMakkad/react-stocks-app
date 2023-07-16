import { useState } from "react";
import { Loader2 } from "lucide-react";

import { usePortfolioStore } from "@/store/portfolio-store";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

import type { Stock } from "@/assets/data/stocks";

export type AddStockBtnProps = {
  stock: Stock;
};

const AddStockBtn = ({ stock }: AddStockBtnProps) => {
  const { addStock, removeStock, isAddedToPortfolio } = usePortfolioStore((state) => ({
    addStock: state.addStock,
    removeStock: state.removeStock,
    isAddedToPortfolio: state.isAddedToPortfolio,
  }));

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleStockAdd = () => {
    setIsLoading(true);

    setTimeout(() => {
      const isAdded = isAddedToPortfolio(stock.symbol);

      isAdded ? removeStock(stock.symbol) : addStock(stock.symbol);
      toast({
        title: isAdded ? "Stock Removed from Portfolio" : "New Stock Added to Portfolio",
        description: isAdded
          ? `${stock.name} has been removed from your portfolio`
          : `${stock.name} has been added to your portfolio`,
      });

      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex justify-center mt-8">
      <Button className="w-full md:w-auto mx-auto" onClick={handleStockAdd} disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isAddedToPortfolio(stock.symbol) ? "Remove from Portfolio" : "Add to Portfolio"}
      </Button>
    </div>
  );
};

export default AddStockBtn;
