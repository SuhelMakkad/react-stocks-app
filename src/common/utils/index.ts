export const BASE_PATH = "/react-stocks-app/";

export const formateAmount = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return formatter.format(amount);
};
