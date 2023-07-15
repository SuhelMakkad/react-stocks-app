import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown, Search } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import TrendChip from "@/components/trend-chip";
import type { Stock } from "@/assets/data/stocks";

import { formateAmount } from "@/utils/index";
import OverviewChart from "../chart/overview";
import { Link } from "react-router-dom";

export type StocksListTableProps = {
  stocks: Stock[];
};

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
      <Link to={`/stock/${row.original.symbol}`} className="flex flex-col capitalize">
        <span className="text-lg font-medium">{row.original.name}</span>
        <span className="text-secondary-foreground">{row.getValue("fullName")}</span>
      </Link>
    ),
  },
  {
    accessorKey: "chartData",
    header: () => {
      return <span className="flex">Trend</span>;
    },
    cell: ({ row }) => (
      <Link to={`/stock/${row.original.symbol}`} className="cursor-pointer">
        <OverviewChart chartData={row.getValue("chartData")} trend={row.original.trend} />
      </Link>
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
      <Link
        to={`/stock/${row.original.symbol}`}
        className="flex flex-col md:flex-row gap-1 items-end md:items-center lowercase"
      >
        <span className="text-lg font-medium">{formateAmount(row.getValue("currentPrice"))}</span>
        <TrendChip
          className="grow-0 w-max scale-90"
          trend={row.original.trend}
          percentageChange={row.original.percentageChange}
        />
      </Link>
    ),
  },
];

const StocksListTable = ({ stocks }: StocksListTableProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: stocks,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 px-2 py-3 bg-transparent rounded-lg border mb-6 max-w-lg">
        <Search className="w-4 h-4" />
        <input
          placeholder="Search stocks..."
          value={(table.getColumn("fullName")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("fullName")?.setFilterValue(event.target.value)}
          className="max-w-sm bg-inherit grow outline-none"
        />
      </div>

      <div className="md:rounded-md border -mx-3 md:mx-auto">
        <Table>
          <TableHeader className="max-md:hidden">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StocksListTable;
