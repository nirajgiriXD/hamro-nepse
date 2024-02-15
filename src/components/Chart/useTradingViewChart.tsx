/**
 * External dependencies.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AreaData,
  AreaSeriesOptions,
  AreaStyleOptions,
  HistogramData,
  HistogramSeriesOptions,
  HistogramStyleOptions,
  IChartApi,
  ISeriesApi,
  SeriesOptionsCommon,
  Time,
  TimeChartOptions,
  WhitespaceData,
  createChart,
  type DeepPartial,
} from "lightweight-charts";

/**
 * Internal dependencies.
 */
import { type TradingData } from "./types";

const useTradingViewChart = () => {
  const [stockData, setStockData] = useState([]);
  const [isAreaSeriesChecked, setAreaSeriesChecked] = useState(false);
  const [isHistogramSeriesChecked, setHistogramSeriesChecked] = useState(false);

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef<boolean>(false);

  const chartOptions = useMemo(() => {
    return {
      layout: {
        textColor: "black",
        background: { type: "solid", color: "white" },
      },
    };
  }, []);

  // Use useRef to store the chart instance
  const chartRef = useRef(null as unknown as IChartApi);
  const areaSeriesRef = useRef(
    null as unknown as ISeriesApi<
      "Area",
      Time,
      WhitespaceData<Time> | AreaData<Time>,
      AreaSeriesOptions,
      DeepPartial<AreaStyleOptions & SeriesOptionsCommon>
    >
  );
  const histogramSeriesRef = useRef(
    null as unknown as ISeriesApi<
      "Histogram",
      Time,
      WhitespaceData<Time> | HistogramData<Time>,
      HistogramSeriesOptions,
      DeepPartial<HistogramStyleOptions & SeriesOptionsCommon>
    >
  );

  useEffect(() => {
    if (isInitialized.current) return;
    const chartContainer = chartContainerRef.current;

    if (!chartContainer) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sam.superintegratedapp.com/wp-json/api/stock-data/?selector=stock&selection=upper&date_from=2023-01-01",
          {
            credentials: "include",
          }
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

        const candlestickSeriesData = data.map((item: TradingData) => ({
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
        chartRef.current?.timeScale().fitContent();
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();

    isInitialized.current = true;
  }, [chartOptions]);

  const handleAreaSeriesChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAreaSeriesChecked(event.target.checked);

    const chart = chartRef.current;

    if (event.target.checked) {
      const data = stockData;

      const areaSeriesData = data.map((item: TradingData) => ({
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

  const handleHistogramSeriesChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHistogramSeriesChecked(event.target.checked);

    const chart = chartRef.current;

    if (event.target.checked) {
      const data = stockData;

      const histogramSeriesData = data.map((item: TradingData) => ({
        time: item.date,
        value: +item.volume,
      }));
      histogramSeriesRef.current = chart.addHistogramSeries({
        color: "#26a69a",
      });

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

  return {
    chartContainerRef,
    isAreaSeriesChecked,
    handleAreaSeriesChange,
    isHistogramSeriesChecked,
    handleHistogramSeriesChange,
  };
};

export default useTradingViewChart;
