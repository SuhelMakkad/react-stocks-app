import { useParams } from "react-router-dom";

const StockDetailsPage = () => {
  const params = useParams();
  console.log({ params });

  return <div>StockDetailsPage</div>;
};

export default StockDetailsPage;
