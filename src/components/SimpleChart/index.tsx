/**
 * External dependencies.
 */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

/**
 * Internal dependencies.
 */
import useSimpleChart from "./useSimpleChart";
import { type StockDataProp } from "./types";

const SimpleChart = ({ stockData }: { stockData: StockDataProp[] }) => {
  const { data, config } = useSimpleChart(stockData);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
  );

  return <Line data={data} options={config} />;
};

export default SimpleChart;
