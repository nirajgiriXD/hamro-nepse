/**
 * Internal dependencies.
 */
import useTradingViewChart from "./useTradingViewChart";

const Chart = () => {
  const {
    chartContainerRef,
    isAreaSeriesChecked,
    handleAreaSeriesChange,
    isHistogramSeriesChecked,
    handleHistogramSeriesChange,
  } = useTradingViewChart();
  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "100vh" }}>
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
