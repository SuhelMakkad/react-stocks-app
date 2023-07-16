import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

import TrendChip from "@/components/trend-chip";
import OverviewChart from "@/components/chart/overview";
import type { Stock } from "@/assets/data/stocks";

import { formateAmount } from "@/utils/index";

const SortArrow = ({ order }: { order?: string | false }) => {
  if (!order) {
    return <ArrowUpDown className="ml-2 h-3 w-3" />;
  }

  if (order === "asc") {
    return <ArrowUp className="ml-2 h-3 w-3" />;
  }
  return <ArrowDown className="ml-2 h-3 w-3" />;
};

export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      const sortOrder = column.getIsSorted();
      return (
        <button
          className="flex gap-2 items-center"
          onClick={() => column.toggleSorting(sortOrder === "asc")}
        >
          Name
          <SortArrow order={sortOrder} />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="flex flex-col capitalize max-w-[8rem] md:max-w-none">
        <span className="text-lg font-medium uppercase">{row.original.symbol}</span>
        <span className="text-secondary-foreground">{row.getValue("fullName")}</span>
      </div>
    ),
  },
  {
    accessorKey: "chartData",
    header: () => {
      return <span className="flex">Trend</span>;
    },
    cell: ({ row }) => (
      <div className="w-14 xs:w-16 sm:w-32">
        <OverviewChart chartData={row.getValue("chartData")} trend={row.original.trend} />
      </div>
    ),
  },
  {
    accessorKey: "currentPrice",
    header: ({ column }) => {
      const sortOrder = column.getIsSorted();
      return (
        <button
          className="flex gap-2 items-center"
          onClick={() => column.toggleSorting(sortOrder === "asc")}
        >
          Amount
          <SortArrow order={sortOrder} />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="flex flex-col md:flex-row gap-1 items-end md:items-center lowercase">
        <span className="text-lg font-medium">{formateAmount(row.getValue("currentPrice"))}</span>
        <TrendChip
          className="grow-0 w-max scale-90"
          trend={row.original.trend}
          percentageChange={row.original.percentageChange}
        />
      </div>
    ),
  },
];
