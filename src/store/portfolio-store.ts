import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Portfolio = {
  symbols: string[];
};

export type PortfolioStoreState = {
  addStock: (symbol: string) => void;
  removeStock: (symbol: string) => void;
  isAddedToPortfolio: (symbol: string) => boolean;
} & Portfolio;

export const usePortfolioStore = create(
  persist<PortfolioStoreState>(
    (set, get) => ({
      symbols: [],
      addStock(symbol) {
        set((prev) => {
          const prevSymbols = prev.symbols;

          // if stock exist then don't add again
          if (prevSymbols.indexOf(symbol) === -1) {
            prevSymbols.push(symbol);
          }

          // using spread operator to make sure that state gets updated
          return { symbols: [...prevSymbols] };
        });
      },
      removeStock(symbol) {
        set((prev) => {
          const symbols = prev.symbols.filter((s) => s !== symbol);
          return { symbols };
        });
      },
      isAddedToPortfolio(symbol: string) {
        return get().symbols.indexOf(symbol) !== -1;
      },
    }),
    {
      name: "portfolio",
    }
  )
);
