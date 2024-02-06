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
import useApp from "../../store/useAppData";

const SimpleChart = () => {
  const { prefersDarkMode } = useApp();

  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        fill: true,
        label: "",
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
        data: [65, 59, 71, 65, 79],
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      scales: {
        yAxes: {
          grid: {
            drawBorder: true,
            color: "#FFFFFF",
          },
          ticks: {
            beginAtZero: true,
            color: "white",
            fontSize: 12,
          },
        },
        xAxes: {
          grid: {
            drawBorder: true,
            color: "#FFFFFF",
          },
          ticks: {
            beginAtZero: true,
            color: "white",
            fontSize: 12,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

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
