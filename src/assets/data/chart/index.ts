import { data as AMZN } from "./AMZN";
import { data as GOOG } from "./GOOG";
import { data as META } from "./META";
import { data as TSLA } from "./TSLA";
import { data as MSFT } from "./MSFT";
import { data as BAC } from "./BAC";
import { data as MA } from "./MA";
import { data as JPM } from "./JPM";
import { data as C } from "./C";
import { data as MS } from "./MS";
import { data as DJIA } from "./DJIA";
import { data as NVDA } from "./NVDA";
import { data as INTC } from "./INTC";
import { data as AMD } from "./AMD";
import { data as QCOM } from "./QCOM";
import { data as MDTKF } from "./MDTKF";

export type ChartData = {
  time: number;
  val: number;
}[];

const stockChartOverview: Record<string, ChartData> = {
  AMZN,
  GOOG,
  META,
  TSLA,
  MSFT,
  BAC,
  MA,
  JPM,
  C,
  MS,
  DJIA,
  NVDA,
  INTC,
  AMD,
  QCOM,
  MDTKF,
};

export default stockChartOverview;
