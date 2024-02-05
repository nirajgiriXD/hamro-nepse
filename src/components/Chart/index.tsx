/**
 * External dependencies.
 */
import { useEffect, useRef, useState } from "react";
import {
  TimeChartOptions,
  createChart,
  type DeepPartial,
} from "lightweight-charts";

const Chart = () => {
  const [stockData, setStockData] = useState([]);
  const [isAreaSeriesChecked, setAreaSeriesChecked] = useState(false);
  const [isHistogramSeriesChecked, setHistogramSeriesChecked] = useState(false);
  
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef<boolean>(false);

  const chartOptions = {
    layout: {
      textColor: "black",
      background: { type: "solid", color: "white" },
    },
  };

  // Use useRef to store the chart instance
  const chartRef = useRef(null);
  const areaSeriesRef = useRef(null);
  const histogramSeriesRef = useRef(null);

  useEffect(() => {
    if(isInitialized.current) return;
    const chartContainer = chartContainerRef.current;

    if (!chartContainer) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sam.superintegratedapp.com/wp-json/api/stock-data/?selector=stock&selection=upper&date_from=2024-01-01"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data1 = await response.json();
        setStockData(data1["stock_data"]);
        const data = data1["stock_data"];

        // Create chart inside the useEffect block and store its reference
        chartRef.current = createChart(
          chartContainer,
          chartOptions as DeepPartial<TimeChartOptions>
        );

        const candlestickSeriesData = data.map((item) => ({
          time: item.date,
          open: +item.open,
          high: +item.high,
          low: +item.low,
          close: +item.close,
        }));

        const candlestickSeries = chartRef.current.addCandlestickSeries({
          upColor: "#26a69a",
          downColor: "#ef5350",
          borderVisible: false,
          wickUpColor: "#26a69a",
          wickDownColor: "#ef5350",
        });

        candlestickSeries.setData(candlestickSeriesData);
        chartRef.current.timeScale().fitContent();
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
    isInitialized.current = true;
  }, []);

  const handleAreaSeriesChange = async (event) => {
    setAreaSeriesChecked(event.target.checked);

    const chart = chartRef.current;

    if (event.target.checked) {

    const data=stockData;

      const areaSeriesData = data.map((item) => ({
        time: item.date,
        value: +item.close,
      }));
      areaSeriesRef.current = chart.addAreaSeries({
        lineColor: "#2962FF",
        topColor: "#2962FF",
        bottomColor: "rgba(41, 98, 255, 0.28)",
      });

      areaSeriesRef.current.setData(areaSeriesData);

    } else {
      const chart = chartRef.current;
      const areaSeries = areaSeriesRef.current;
      if (areaSeries) {
        chart.removeSeries(areaSeries);
      }
  }
  };

  const handleHistogramSeriesChange = async (event) => {
    setHistogramSeriesChecked(event.target.checked);

    const chart = chartRef.current;

    if (event.target.checked) {

    const data=stockData;

      const histogramSeriesData = data.map((item) => ({
        time: item.date,
        value: +item.volume,
      }));
      histogramSeriesRef.current = chart.addHistogramSeries({ color: '#26a69a' });

      histogramSeriesRef.current.setData(histogramSeriesData);

    } else {
      console.log("uncheck");
      const chart = chartRef.current;
      const histogramSeries = histogramSeriesRef.current;
      if (histogramSeries) {
        chart.removeSeries(histogramSeries);
      }
  }
  };

  return (
    <div  ref={chartContainerRef} style={{ width: "100%", height: "100vh" }}>
      <input
        type="checkbox"
        id="areaSeries"
        name="areaSeries"
        checked={isAreaSeriesChecked}
        onChange={handleAreaSeriesChange}
      />
      <label htmlFor="areaSeries">Area Series</label>

      <input
        type="checkbox"
        id="histogramSeries"
        name="histogramSeries"
        checked={isHistogramSeriesChecked}
        onChange={handleHistogramSeriesChange}
      />
      <label htmlFor="histogramSeries">Histogram Series</label>
    </div>
  );
};

export default Chart;
