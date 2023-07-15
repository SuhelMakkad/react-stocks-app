import { data as AMZN } from "./AMZN";
import { data as GOOG } from "./GOOG";
import { data as META } from "./META";
import { data as TSLA } from "./TSLA";
import { data as MSFT } from "./MSFT";

export type ChartData = {
  time: number;
  val: number;
}[];

const stockChartOverview: Record<string, ChartData> = { AMZN, GOOG, META, TSLA, MSFT };

export default stockChartOverview;
