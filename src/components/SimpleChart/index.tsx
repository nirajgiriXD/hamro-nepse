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
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

/**
 * Internal dependencies.
 */
import useApp from "../../store/useAppData";
import { useMemo } from "react";

interface StockDataProp {
  date: string;
  close: number;
}

const SimpleChart = ({ stockData }: { stockData: StockDataProp[] }) => {
  const { prefersDarkMode } = useApp();

  const monthNames = useMemo(() => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentMonthIndex = new Date().getMonth();
    const rotatedMonths = [
      ...months.slice(currentMonthIndex),
      ...months.slice(0, currentMonthIndex),
    ];

    return rotatedMonths;
  }, []);

  const chartData = useMemo(() => {
    // Group data by month
    const groupedByMonth = stockData.reduce((acc, item) => {
      const month = item.date.slice(0, 7); // Extract YYYY-MM format
      acc[month] = [...(acc[month] || []), item];
      return acc;
    }, {} as Record<string, StockDataProp[]>);

    // Get the last day of each month
    const lastDayData = Object.values(groupedByMonth).map((monthData) => {
      const sortedMonthData = monthData.sort((a, b) =>
        a.date.localeCompare(b.date)
      );
      return sortedMonthData[sortedMonthData.length - 1];
    });

    // Extract the close property value
    const closeValues = lastDayData.map((item) => item.close);

    return closeValues;
  }, [stockData]);

  const maxChartValue = useMemo(() => {
    const max = Math.max.apply(null, chartData);
    return max + max / 10;
  }, [chartData]);

  const minChartValue = useMemo(() => {
    const min = Math.min.apply(null, chartData);
    return min - min / 10;
  }, [chartData]);

  const data = {
    labels: monthNames,
    datasets: [
      {
        fill: true,
        label: "Stock Data",
        lineTension: 0.5,
        backgroundColor: prefersDarkMode
          ? "rgba(255,255,255,0.3)"
          : "rgba(75,192,192,0.3)",
        borderColor: prefersDarkMode
          ? "rgba(255,255,255,1)"
          : "rgba(75,192,192,1)",
        borderWidth: 2,
        color: prefersDarkMode
          ? "rgba(255,255,255,0.3)"
          : "rgba(75,192,192,0.3)",
        data: chartData,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    scales: {
      y: {
        suggestedMin: minChartValue,
        suggestedMax: maxChartValue,
      },
    },
  } as ChartOptions<"line">;

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
